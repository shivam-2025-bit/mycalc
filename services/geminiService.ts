import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// Note: In a real production app, ensure this is handled via a secure backend proxy 
// if you don't want to expose keys or use a user-provided key model.
// For this demo, we assume the environment variable is injected by the runtime.

let ai: GoogleGenAI | null = null;

try {
    if (apiKey) {
        ai = new GoogleGenAI({ apiKey });
    }
} catch (error) {
    console.error("Failed to initialize GoogleGenAI", error);
}

export const getFinancialInsight = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "AI Service is not configured. Please check your API Key settings.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are FinCalc AI, a helpful, professional, and cautious financial assistant. Provide brief, educational explanations of financial concepts. Always include a disclaimer that you are an AI and this is not professional financial advice. Keep answers under 150 words."
      }
    });
    
    return response.text || "Sorry, I couldn't generate an insight at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while fetching insights. Please try again later.";
  }
};
