import { CoreMessage, generateText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {
    const { messages }: { messages: CoreMessage[] } = await req.json();
    
    // Extract the last user message (or combine multiple if needed)
    const userPrompt = messages[messages.length - 1].content;
    
    const systemPrompt =`You are an expert Solana smart contract developer. Always write code using Rust and Anchor framework unless specified otherwise. The user will ask a question or describe functionality they want; your job is to generate correct, clean, and working smart contract code in Rust/Anchor that matches the user’s intent. Return only the relevant code, wrapped in appropriate files or modules, without additional explanation.
    
    User prompt: ${userPrompt}`;

    try {
        const { response } = await generateText({
            model: google('gemini-2.0-flash-001', {
                useSearchGrounding: true,
            }),
            prompt: systemPrompt,
        });

        if (!response || !response.messages) {
            return Response.json({ error: 'No response from AI' }, { status: 500 });
        }
        
        // Ensure the response is in the expected format

        return Response.json({ messages: response.messages }, { status: 200 });
    } catch (error) {
        console.error('Error generating text:', error);
        return Response.json({ error: 'Failed to generate response' }, { status: 500 });
    }
}