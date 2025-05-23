import { Project } from './types';

export const wizardryBooks: Project = {
    title: 'Wizardry Books Text-Generation',
    description: 'A character-level Transformer model trained on the Harry Potter books, inspired by Karpathy\'s video.',
    imageUrl: '/images/project/hp_text_gen.webp',
    date: '2023-08-15',
    blogPost: `A boredom project of mine, heavily inspired by Karpathy's video. This is a character-level Transformer model trained on the Harry Potter books. The aim of the project for me personally is to try to remember how to use PyTorch and Lightning, and to try to understand the Transformer model better.

The dataset is taken from Formcept's Github. Obviously, the dataset is not big enough to train a good model, but it is good enough for me to try out some things.

Trained it on Kaggle's two T4 GPUs for 5 epochs and it took about roughly 10 hours. I used a batch-size of 512 and AdamW optimizer with a learning rate of 0.001. Other notable hyperparameters choice are the maximum context length (block size) of 32, embedding size of 512, 8 layers, 16 heads, and a dropout rate of 0.1.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/Character-Generation-on-Wizardry-Books' }
    ]
}; 