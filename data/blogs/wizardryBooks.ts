import { Blog } from './types';

export const wizardryBooks: Blog = {
    type: 'project',
    title: 'Teaching Transformers to Write Harry Potter',
    description: 'What happens when you teach AI to write like J.K. Rowling? Pure magic (or at least entertaining gibberish).',
    imageUrl: '/images/project/hp_text_gen.webp',
    date: '2023-08-15',
    blogPost: `Ever wondered what would happen if you let AI loose on the magical world of Harry Potter? That's exactly what I set out to discover in this project, drawing inspiration from Andrej Karpathy's legendary work on neural language models. At its core, this is a **character-level Transformer model** trained to generate text in the style of J.K. Rowling's beloved series, working at the character level for a more granular understanding of language patterns and a deeper technical challenge.

## The Dataset and Approach

The model was trained on the complete Harry Potter series, sourced from Formcept's Github repository. While this dataset (roughly **1.1M characters**) is modest compared to the massive corpora used by models like GPT-3, it provides an excellent playground for experimenting with transformer architectures and understanding their inner workings. The implementation uses **PyTorch and PyTorch Lightning**, combining the power of modern deep learning frameworks with clean, maintainable code.

## Technical Architecture

The architecture includes:
- **8 transformer layers** with 16 attention heads
- **512-dimensional embeddings** for rich character representations
- **Context window of 32 characters** for local pattern learning
- **Dropout rate of 0.1** for regularization

Training was conducted on Kaggle's T4 GPUs, utilizing parallel processing across two units with a substantial batch size of 512 and the AdamW optimizer (learning rate: 0.001). The model trained for **5 epochs over approximately 10 hours**, learning to capture everything from character names and magical spells to distinctive British English patterns.

## Results: Learning to "Speak Wizard"

The generated text, while not publishing-ready, shows fascinating patterns in how the model learned to mimic Rowling's writing style. It captures:
- *Proper punctuation and dialogue formatting*
- *Consistent context* within its 32-character window  
- *New, plausible-sounding spells* and magical terms

The model learned to distinguish between character voices and magical terminology, creating text that feels authentically Harry Potter-esque even when it doesn't make perfect narrative sense.

## Key Insights

This project served as an excellent refresher on PyTorch and Lightning while providing deep insights into transformer architecture and the challenges of character-level language modeling. Watching the AI gradually learn to "speak wizard" highlighted how transformers can capture **style, tone, and domain-specific vocabulary** from relatively small datasets. 

It's a perfect example of how modern language models can internalize not just grammar and syntax, but the *distinctive voice and magical vocabulary* that makes the wizarding world so captivating.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/Character-Generation-on-Wizardry-Books' }
    ]
}; 