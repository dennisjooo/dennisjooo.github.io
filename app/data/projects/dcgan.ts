import { Project } from './types';

export const dcgan: Project = {
    title: 'Deep Convolutional GAN on MNIST',
    description: 'An application of the DCGAN model on the MNIST dataset.',
    imageUrl: '/images/project/dcgan_mnist.webp',
    date: '2023-07-26',
    blogPost: `An application of the DCGAN model on the MNIST dataset. The main aim for the project is to try design a working DCGAN, which is notoriously hard to train.

The model was trained using Kaggle's P100 GPU for about 200 epochs. The structure of the model resembles the one in Sebastian Raschka's Machine Learning with PyTorch and Scikit-Learn book. The generator and discriminator are both CNNs. The generator takes in a 100-dimensional noise vector and outputs a 28x28 image. The discriminator takes in a 28x28 image and outputs a single value, which is the probability that the image is real.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/DCGAN-on-MNIST' }
    ]
};

