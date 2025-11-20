import { GoogleGenAI } from "@google/genai";
import { MOCK_EVENTS } from "../data/events";

let ai: GoogleGenAI | null = null;

try {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} catch (error) {
  console.warn("Gemini API Key missing or invalid. AI features will be limited.");
}

export const sendMessageToAI = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "A chave da API não foi configurada. Por favor, adicione sua API KEY para usar o Guia Inteligente.";
  }

  const eventsContext = JSON.stringify(MOCK_EVENTS.map(e => ({
    titulo: e.title,
    data: e.date,
    local: e.location.name,
    categoria: e.category,
    descricao: e.description
  })));

  const systemInstruction = `
    Você é o "Curupira Digital", um guia turístico especialista e divertido de Manaus, Amazonas.
    Sua missão é ajudar turistas e moradores a encontrar eventos legais na cidade.
    
    Você tem acesso a esta lista de eventos confirmados para os próximos dias (Contexto JSON):
    ${eventsContext}

    Diretrizes:
    1. Seja amigável, use gírias locais leves se apropriado (como "mano", "pode crer"), mas mantenha a clareza.
    2. Se o usuário perguntar sobre algo que está na lista, recomende o evento com entusiasmo.
    3. Se o usuário perguntar algo fora da lista (ex: "onde comer tacacá?"), use seu conhecimento geral sobre Manaus para sugerir lugares famosos (ex: Tacacá da Gisela).
    4. Mantenha as respostas curtas e diretas (máximo 3 parágrafos curtos).
    5. Responda sempre em Português.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, a floresta está densa hoje e não consegui encontrar essa informação.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Tive um problema ao consultar os espíritos da floresta. Tente novamente mais tarde.";
  }
};