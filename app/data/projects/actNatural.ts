import { Project } from './types';

export const actNatural: Project = {
    title: 'Act Natural',
    description: 'Because teaching AI to act is exactly as chaotic as it sounds',
    imageUrl: '/images/project/act_natural.webp',
    date: '2024-12-07',
    blogPost: `Have you ever wondered what would happen if you let AI characters loose on a virtual stage? Well, I did, and the result is Act Natural - an interactive theatre experience where artificial actors try (and often hilariously fail) to act natural.

What started as a way to kill time at work evolved into an interesting exploration of agentic systems. The core idea was simple: create AI characters that can improvise scenes together while maintaining their own hidden motives and agendas. Add in a narrator for dramatic flair, and let users participate in whatever chaos unfolds.

The system is built on Groq's LLMs, with different models handling different aspects:
- Gemma 2 9B powers the individual characters
- Llama 3.3 70B generates the scenarios and plotlines and orchestrates the conversation

Under the hood, there are several key components working together (or at least trying to):

The Play Manager acts as the director, attempting to keep everything from completely derailing. Meanwhile, AI actors do their best to stay in character while the Narrator adds dramatic commentary. The Orchestrator's job is to ensure the characters actually interact with each other in somewhat coherent ways.

The system has several fun features that emerged during development. Characters maintain internal monologues that users never see (probably for the best). Each scene is completely unexpected thanks to random scenario generation. Every character has their own personality, background, and secret agenda. The narrator tries their best to set the mood, though results may vary.

The technical implementation uses Langchain to manage conversation history and character states. Looking ahead, I'd love to add several enhancements: a vector database for character memories, a graph database for tracking relationships, and D&D-style dice rolls for action outcomes.

For now though, it's a delightfully chaotic experiment in AI theatre. The current implementation is admittedly janky, but watching AI characters try to maintain their composure while secretly plotting against each other makes it all worthwhile.`,
    links: [{ text: 'Github', url: 'https://github.com/dennisjooo/act-natural' }]
}; 