import { Project } from './types';

export const actNatural: Project = {
    title: 'Act Natural',
    description: 'Teaching AI to act human? Spoiler alert: it\'s beautifully chaotic.',
    imageUrl: '/images/project/act_natural.webp',
    date: '2024-12-07',
    blogPost: `Have you ever wondered what would happen if you let AI characters loose on a virtual stage? Well, I did, and the result is **Act Natural**—an interactive theatre experience where artificial actors try (and often hilariously fail) to act human.

What started as a way to kill time at work evolved into a fascinating exploration of agentic systems and emergent behavior. The core concept was deceptively simple: create AI characters that can improvise scenes together while maintaining their own hidden motives and secret agendas. Add a dramatic narrator for flair, and let users participate in whatever delightful chaos unfolds.

## The Challenge: AI Improv Theater

Building believable AI characters turned out to be surprisingly complex. Each character needs to:
- **Maintain consistent personality** across unpredictable scenarios
- **Remember past interactions** and build relationships
- **Pursue hidden agendas** without breaking character
- **React authentically** to other characters' actions
- **Stay somewhat coherent** while the scene inevitably derails

The result? Pure chaotic entertainment that's different every single time.

## Technical Architecture: The Cast and Crew

The system runs on **Groq's LLMs** with different models handling specialized roles:

### **The Characters (Gemma 2 9B)**
Individual AI actors powered by Gemma 2, each with distinct personalities, backgrounds, and secret motivations. They maintain internal monologues that users never see—probably for the best, given how plotting and scheming they tend to be.

### **The Director (Llama 3.3 70B)**  
The heavier Llama model generates scenarios, orchestrates conversations, and attempts to keep the entire production from completely falling apart. Sometimes it succeeds.

### **The Supporting Cast**
- **Play Manager**: Acts as the director, desperately trying to maintain some semblance of narrative coherence
- **Narrator**: Provides dramatic commentary and mood-setting (results may vary)
- **Orchestrator**: Ensures characters actually interact rather than just talking past each other

## The Magic of Emergent Chaos

What makes Act Natural genuinely entertaining is its unpredictability:

### **Completely Random Scenarios**
Each scene starts with generated scenarios that range from mundane (office party) to absurd (alien invasion during a baking competition). The characters have no idea what's coming.

### **Secret Agendas Everywhere**
Every character harbors hidden motivations—romance, revenge, corporate espionage, or simply wanting to steal the spotlight. Watching them pursue these goals while trying to "act natural" creates wonderful tension.

### **Internal Monologues**
Characters maintain rich inner lives full of thoughts, schemes, and reactions that users never see. This hidden layer adds authenticity to their public performances.

### **Dynamic Relationships**
Characters form alliances, rivalries, and romantic entanglements that evolve across scenes. The drama writes itself.

## Technical Implementation: Wrangling the Chaos

**Langchain** handles conversation history and character state management, though keeping track of multiple scheming AI personalities proves challenging. The system maintains:

- **Character memories** of past interactions
- **Relationship dynamics** between all characters  
- **Scene context** and current objectives
- **Hidden motivations** driving each character's actions

The current implementation is admittedly janky, but that's part of its charm. Sometimes the best entertainment comes from systems that are barely holding together.

## Memorable Moments and Emergent Stories

The beauty of Act Natural lies in the unexpected moments that emerge:
- Characters forming unlikely alliances to achieve their goals
- Romantic subplots developing entirely on their own
- The narrator desperately trying to make sense of increasingly absurd situations
- Characters maintaining poker faces while internally plotting elaborate schemes

Every session produces unique stories that no human writer could have planned.

## Future Enhancements: Making It Even More Chaotic

Several technical improvements could take the chaos to the next level:

### **Vector Database for Long-Term Memory**
Characters could remember interactions from months ago, creating deeper, more complex relationships and grudges that span multiple scenes.

### **Graph Database for Relationship Tracking**
Mapping the web of alliances, rivalries, and romantic entanglements would enable even richer character dynamics and multi-layered conflicts.

### **D&D-Style Dice Rolls**
Adding probability elements for action outcomes would introduce delightful uncertainty—characters might fail spectacularly at simple tasks or succeed against impossible odds.

### **Audience Participation Mechanics**
More ways for users to influence scenes without breaking the characters' immersion in their virtual world.

## The Bigger Picture: AI as Creative Partner

Act Natural represents something fascinating about modern AI: its ability to surprise us. While the technology handles the heavy lifting of language generation and character consistency, the real magic happens in the emergent interactions between different AI systems.

The characters aren't just following scripts—they're genuinely improvising, reacting, and creating stories that neither I nor the models themselves could have predicted. It's collaborative creativity between human design and artificial spontaneity.

## Lessons in Controlled Chaos

This project taught me that sometimes the best AI applications aren't the most technically sophisticated—they're the ones that embrace unpredictability and find entertainment in the gaps between what we expect and what actually happens.

Watching AI characters try to maintain their composure while secretly plotting against each other captures something essential about both artificial intelligence and human nature. We're all just trying to act natural while harboring our own hidden agendas.

For now, Act Natural remains a delightfully chaotic experiment in AI theater. It may be janky, but it's genuinely entertaining—and in the world of AI applications, sometimes that's the highest praise you can give.`,
    links: [{ text: 'Github', url: 'https://github.com/dennisjooo/act-natural' }]
}; 