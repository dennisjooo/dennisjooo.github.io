import { Project } from './types';

export const wizardryBooks: Project = {
    title: 'Wizardry Books Text-Generation',
    description: 'What happens when you teach AI to write like J.K. Rowling? Pure magic (or at least entertaining gibberish).',
    imageUrl: '/images/project/hp_text_gen.webp',
    date: '2023-08-15',
    blogPost: `Ever wondered what would happen if you let AI loose on the magical world of Harry Potter? That's exactly what I set out to discover in this project, drawing inspiration from Andrej Karpathy's legendary work on neural language models.

At its core, this is a character-level Transformer model trained to generate text in the style of J.K. Rowling's beloved series. While many language models work with words or subwords, I chose to work at the character level for a more granular understanding of language patterns and a deeper technical challenge.

The model was trained on the complete Harry Potter series, sourced from Formcept's Github repository. While this dataset (roughly 1.1M characters) is modest compared to the massive corpora used by models like GPT-3, it provides an excellent playground for experimenting with transformer architectures and understanding their inner workings.

## Technical Implementation

The implementation uses PyTorch and PyTorch Lightning, combining the power of modern deep learning frameworks with clean, maintainable code. The model architecture includes:

- 8 transformer layers with 16 attention heads
- 512-dimensional embeddings
- Context window of 32 characters
- Dropout rate of 0.1 for regularization

Training was conducted on Kaggle's T4 GPUs, utilizing parallel processing across two units. With a substantial batch size of 512 and the AdamW optimizer (learning rate: 0.001), the model trained for 5 epochs over approximately 10 hours.

## Results and Learnings

The generated text, while not publishing-ready, shows fascinating patterns in how the model learned to mimic Rowling's writing style. It captures everything from character names and magical spells to the distinctive British English patterns present in the books.

Some interesting observations:
- The model learned proper punctuation and dialogue formatting
- It consistently maintains context within its 32-character window
- It occasionally invents new, plausible-sounding spells and magical terms

This project served as an excellent refresher on PyTorch and Lightning, while providing deep insights into transformer architecture and the challenges of character-level language modeling.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/Character-Generation-on-Wizardry-Books' }
    ]
}; 