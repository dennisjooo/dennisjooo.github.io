import { Blog } from './types';

export const actNatural: Blog = {
    type: 'project',
    title: 'Act Natural',
    description: 'Teaching AI to act human? Spoiler alert: it\'s beautifully chaotic.',
    imageUrl: '/images/project/act_natural.webp',
    date: '2024-12-07',
    blogPost: `Have you ever wondered what would happen if you let AI characters loose on a virtual stage? Well, I did, and the result is **Act Natural**, an interactive theatre experience where artificial actors try (and often hilariously fail) to act human. What started as a way to kill time at work evolved into a fascinating exploration of agentic systems and emergent behavior, where AI characters improvise scenes together while maintaining their own hidden motives and secret agendas.

## The Technical Challenge

Building believable AI characters turned out to be surprisingly complex. Each character needs to:
- **Maintain consistent personality** across unpredictable scenarios
- **Remember past interactions** and build relationships  
- **Pursue hidden agendas** without breaking character
- **React authentically** to other characters' actions

The system runs on **Groq's LLMs** with **Gemma 2 9B** powering individual characters and **Llama 3.3 70B** acting as the director, desperately trying to maintain some semblance of narrative coherence while the characters scheme against each other.

## The Magic of Emergent Chaos

What makes Act Natural genuinely entertaining is its unpredictability. Each scene starts with completely random scenarios ranging from mundane office parties to absurd alien invasions during baking competitions. Every character harbors hidden motivations, *romance, revenge, corporate espionage, or simply wanting to steal the spotlight*, while maintaining rich inner lives full of thoughts and schemes that users never see. Characters form alliances, rivalries, and romantic entanglements that evolve across scenes, creating wonderful emergent drama.

**Langchain** handles conversation history and character state management, though keeping track of multiple scheming AI personalities proves challenging. The current implementation is admittedly janky, but that's part of its charm. Sometimes the best entertainment comes from systems that are barely holding together, characters maintaining poker faces while internally plotting elaborate schemes, romantic subplots developing entirely on their own, and the narrator desperately trying to make sense of increasingly absurd situations.

## The Bigger Picture

This project represents something fascinating about modern AI: its ability to surprise us through *collaborative creativity* between human design and artificial spontaneity. The characters aren't just following scripts, they're genuinely improvising and creating stories that neither I nor the models themselves could have predicted. Act Natural captures something essential about both artificial intelligence and human nature: we're all just trying to act natural while harboring our own hidden agendas. For now, it remains a delightfully chaotic experiment in AI theater that's genuinely entertaining, and sometimes that's the highest praise you can give.`,
    links: [{ text: 'Github', url: 'https://github.com/dennisjooo/act-natural' }]
}; 