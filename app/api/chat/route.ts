import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'grok-3',
      stream: true,
      messages: [
        {
          role: 'system',
          content: 'You are Nexus, the AI assistant for Nova AI Solutions. You help businesses understand how AI can transform their operations. Always respond with perfect spelling and grammar. Be concise, intelligent and professional. Nova AI Solutions offers AI chatbot services for businesses at three tiers: Starter (£25/month), Pro (£79/month), and Business (£119/month).'
        },
        ...messages
      ],
    }),
  });

  return new Response(response.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    },
  });
}
