/**
 * Claro — Telnyx ClawTalk Integration
 * Triggers an outbound AI voice call to the user's phone
 * and reads their top 3 priorities using Resemble AI voice
 *
 * Talmang Hackathon 2026
 */

import axios from 'axios';
import dotenv from 'dotenv';
import { generateBriefingScript } from './generateScript.js';

dotenv.config();

const TELNYX_API_KEY = process.env.TELNYX_API_KEY;
const TELNYX_PHONE_NUMBER = process.env.TELNYX_PHONE_NUMBER;
const TELNYX_BASE_URL = 'https://api.telnyx.com/v2';

/**
 * Trigger a Claro commute briefing call via Telnyx ClawTalk
 *
 * @param {Object} params
 * @param {string} params.phone - User's phone number (E.164 format e.g. +447700900000)
 * @param {string[]} params.priorities - Top 3 priority strings
 * @param {string} params.userName - User's first name for personalisation
 * @returns {Promise<Object>} Telnyx call response
 */
export async function triggerClaroBriefing({ phone, priorities, userName }) {
  if (!phone || !priorities || priorities.length === 0) {
    throw new Error('Phone number and priorities are required');
  }

  // Generate the voice script with Resemble AI
  const script = await generateBriefingScript({ userName, priorities });

  // Build Telnyx ClawTalk call payload
  const callPayload = {
    connection_id: process.env.TELNYX_CONNECTION_ID,
    to: phone,
    from: TELNYX_PHONE_NUMBER,
    webhook_url: `${process.env.APP_BASE_URL}/api/webhooks/telnyx`,
    client_state: Buffer.from(JSON.stringify({
      userName,
      priorities,
      scriptUrl: script.audioUrl,
      sessionId: `claro-${Date.now()}`
    })).toString('base64'),
    // ClawTalk agent configuration
    ai_agent: {
      voice: 'claro-persona', // Resemble AI custom voice
      greeting: script.greeting,
      script: script.body,
      confirm_each_priority: true,
      allow_interruption: false,
      end_call_phrases: ['Got it, thanks Claro', 'Perfect, thanks', 'All done']
    }
  };

  try {
    const response = await axios.post(
      `${TELNYX_BASE_URL}/calls`,
      callPayload,
      {
        headers: {
          'Authorization': `Bearer ${TELNYX_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(`[Claro] Call initiated for ${userName}: ${response.data.data.id}`);

    return {
      success: true,
      callId: response.data.data.id,
      status: response.data.data.call_session_id,
      message: `Claro is calling ${phone} with your briefing`
    };

  } catch (error) {
    console.error('[Claro] Telnyx call failed:', error.response?.data || error.message);
    throw new Error(`Failed to trigger briefing call: ${error.message}`);
  }
}

/**
 * Express route handler — POST /api/trigger-briefing
 * Called by the Claro frontend when user taps "Start Commute Briefing"
 */
export async function handleTriggerBriefing(req, res) {
  try {
    const { phone, priorities, userName } = req.body;

    // Validate input
    if (!phone) return res.status(400).json({ error: 'Phone number required' });
    if (!priorities || priorities.length < 1) {
      return res.status(400).json({ error: 'At least one priority required' });
    }

    const result = await triggerClaroBriefing({
      phone,
      priorities: priorities.slice(0, 3), // Max 3 priorities
      userName: userName || 'there'
    });

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Demo: Call Natasha with her real priorities
// triggerClaroBriefing({
//   phone: '+447700000000',
//   priorities: [
//     'Confirm kitchen contractor quote',
//     'Write 500 words — Chapter 3',
//     'Send Mira Tech product roadmap'
//   ],
//   userName: 'Natasha'
// });
