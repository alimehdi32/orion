# Solana Playground

A modern, no-code playground for Solana smart contracts built with Next.js and Tailwind CSS.

## Features

- Clean, modern UI inspired by Vercel and V0
- Interactive chat interface for natural language queries
- Real-time code generation display with syntax highlighting
- File tree navigation for multiple contract files
- Simulation output preview
- Responsive design for all screen sizes

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- React Syntax Highlighter
- Heroicons
- Headless UI

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd solana-playground
```
2. API_KEY Integration:
 create .env.local
 GOOGLE_GENERATIVE_AI_API_KEY=YOUR_API_KEY

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   ├── ChatInterface.tsx    # Chat UI component
│   ├── CodeDisplay.tsx      # Code display with syntax highlighting
│   ├── FileTree.tsx         # File navigation component
│   └── SimulationOutput.tsx # Simulation results display
```

## Development

The project uses:
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- Prettier for code formatting

## License

MIT
 

## Demo (You Tube)
[Watch the Demo on You Tube](https://youtu.be/hME1N8rxGqM)