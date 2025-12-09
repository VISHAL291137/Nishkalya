import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateCreativeConcept = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a short, poetic, and premium creative brand concept for the following topic: "${topic}". 
      
      Tone: Calm, sophisticated, timeless, minimal. 
      Format: 
      - A Title
      - A Tagline
      - A short paragraph describing the aesthetic (visuals, textures, mood).
      - Suggested Color Palette (3 colors).
      
      Keep it under 150 words. Do not use markdown bolding too aggressively.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Could not generate concept.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The creative muse is silent at the moment. Please try again later.";
  }
};