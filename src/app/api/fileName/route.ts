import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req: Request) {

    // Extract the last user message (or combine multiple if needed)
    const userPrompt = await req.json().then(data => data.text );

    // Assuming the user's code is in the last message's content
    const systemPrompt = `You are an expert Solana smart contract developer. Your task is to analyze the provided Rust/Anchor code for a Solana smart contract. Based on the code's content and its likely purpose, generate a single, appropriate filename for the main Rust source file (e.g., lib.rs, my_program.rs, instructions.rs, state.rs, errors.rs, constants.rs). The filename should reflect the primary functionality or component defined in the code.Everytime generated name should be unique and relevant to the code's content.

Return *only* the filename, without any other text or explanation.
   
\`\`\`rust
${userPrompt}
\`\`\`
`;

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