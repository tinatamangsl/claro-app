/**
 * Claro — Resemble AI Voice Script Generator
 * Generates personalised voice briefing scripts for Claro
 * Uses Resemble AI Chatterbox TTS for warm, human-like narration
 *
 * Talmang Hackathon 2026
 */

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const RESEMBLE_API_KEY = process.env.RESEMBLE_API_KEY;
const RESEMBLE_VOICE_UUID = process.env.RESEMBLE_VOICE_UUID; // Claro's custom voice
const RESEMBLE_PROJECT_UUID = process.env.RESEMBLE_PROJECT_UUID;
const RESEMBLE_BASE_URL = 'https://app.resemble.ai/api/v2';

/**
 * Build the Claro briefing script text
 * Warm, confident, personalised to the user
 */
function buildScriptText({ userName, priorities }) {
  const priorityList = priorities
    .map((p, i) => `Number ${['one', 'two', 'three'][i]}: ${p}.`)
    .join(' ');

  const greeting = `Good morning ${userName}. This is Claro. Your daily clarity briefing.`;

  const body = `Here are your top ${priorities.length} priorities for today. ${priorityList} That's your clarity for today, ${userName}. You've got this. Have a great commute.`;

  return { greeting, body, fullScript: `${greeting} ${body}` };
}

/**
 * Generate audio for a briefing script using Resemble AI
 *
 * @param {Object} params
 * @param {string} params.userName - User's first name
 * @param {string[]} params.priorities - Top 3 priority strings
 * @returns {Promise<Object>} Script text and audio URL
 */
export async function generateBriefingScript({ userName, priorities }) {
  const script = buildScriptText({ userName, priorities });

  try {
    // Create a clip via Resemble AI API
    const response = await axios.post(
      `${RESEMBLE_BASE_URL}/projects/${RESEMBLE_PROJECT_UUID}/clips`,
      {
        voice_uuid: RESEMBLE_VOICE_UUID,
        body: script.fullScript,
        is_public: false,
        is_archived: false,
        title: `claro-briefing-${userName}-${Date.now()}`,
        // Claro voice persona settings
        emotion: 'warm',
        pace: 0.95, // Slightly slower — calm and clear for commute listening
        output_format: 'mp3'
      },
      {
        headers: {
          'Authorization': `Bearer ${RESEMBLE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const clip = response.data.item;

    console.log(`[Claro] Resemble AI audio generated: ${clip.uuid}`);

    return {
      greeting: script.greeting,
      body: script.body,
      fullScript: script.fullScript,
      audioUrl: clip.audio_src,
      clipUuid: clip.uuid,
      durationSeconds: clip.duration || null
    };

  } catch (error) {
    console.error('[Claro] Resemble AI generation failed:', error.response?.data || error.message);

    // Fallback: return script text only — Telnyx will use its default TTS
    console.warn('[Claro] Falling back to Telnyx default TTS');
    return {
      greeting: script.greeting,
      body: script.body,
      fullScript: script.fullScript,
      audioUrl: null,
      clipUuid: null
    };
  }
}

/**
 * Generate a Claro voice preview (for web app playback before calling)
 * Used in the Commute page to preview the briefing before committing to the call
 */
export async function generatePreviewClip({ userName, priorities }) {
  return await generateBriefingScript({ userName, priorities });
}

// Example output for Natasha:
// "Good morning Natasha. This is Claro. Your daily clarity briefing.
// Here are your top 3 priorities for today.
// Number one: Confirm kitchen contractor quote.
// Number two: Write 500 words — Chapter 3.
// Number three: Send Mira Tech product roadmap.
// That's your clarity for today, Natasha. You've got this. Have a great commute."
