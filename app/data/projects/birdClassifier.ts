import { Project } from './types';

export const birdClassifier: Project = {
    title: 'Bird Classifier on EfficientNet-B2',
    description: 'This was a project I did for Ruangguru\'s Engineering Academy Mastering AI Bootcamp, training an image classifier on a bird dataset using EfficientNet-B2.',
    imageUrl: '/images/project/birb_classifier.webp',
    date: '2023-11-05',
    blogPost: `The dataset is taken from Gpiosenka's Kaggle Dataset. As the dataset is still actively being updated, I used the dataset from September 24th, 2023. It has 525 different species with 84,635 training images, 2,625 each for validation and test images.

Trained it on Kaggle's P100 GPU with the help of Lightning. The model used was a pre-trained EfficientNet-B2 from HuggingFace which was originally trained for ImageNet-1K. It ended up performing super well, reaching 99% accuracy only after 26 epochs. Full training logs and hyperparameters are available in the repo and the model itself is available for download on HuggingFace's model hub.

What was actually memorable was that I got my first ever discussion on HuggingFace. It was a question about converting the model to ONNX, which was a fun and a bit frustrating experience for me.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/Birds-Classifier-EfficientNetB2' },
        { text: 'HuggingFace', url: 'https://huggingface.co/dennisjooo/Birds-Classifier-EfficientNetB2' }
    ]
}; 