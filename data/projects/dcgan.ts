import { Project } from './types';

export const dcgan: Project = {
    title: 'Deep Convolutional GAN on MNIST',
    description: 'Teaching machines to forge handwritten digits so convincingly, even other machines can\'t tell the difference.',
    imageUrl: '/images/project/dcgan_mnist.webp',
    date: '2023-07-26',
    blogPost: `What happens when you pit two neural networks against each other in an endless game of cat and mouse? You get a Generative Adversarial Network (GAN) - and this project explores the fascinating world of DCGANs applied to the classic MNIST handwritten digit dataset.

The concept behind GANs is beautifully simple yet devilishly complex to implement. Imagine a forger (the generator) trying to create fake paintings, while an art expert (the discriminator) tries to spot the fakes. As they compete, both get better at their jobs until eventually, the forger becomes so skilled that even the expert can't tell real from fake.

## The Challenge of Adversarial Training

GANs are notoriously difficult to train, and for good reason. The training process is a delicate balancing act between two competing networks. If one becomes too powerful too quickly, the whole system can collapse—the generator might produce meaningless noise, or the discriminator might become so good that it provides no useful feedback.

This project implements a **Deep Convolutional GAN (DCGAN)**, which uses convolutional layers instead of fully connected ones. This architectural choice makes the model particularly well-suited for image generation, as convolutional layers capture the spatial relationships crucial for realistic image synthesis.

## Architecture and Training Strategy

The generator takes a 100-dimensional noise vector (random numbers) and transforms it into a 28x28 grayscale image through transposed convolutional layers that progressively upscale from a small feature map to the final image size.

The discriminator does the opposite—compressing a 28x28 image down to a single probability indicating whether it's real (from MNIST) or fake (generator-created). Standard convolutional layers with pooling progressively reduce spatial dimensions while increasing feature depth.

Training this DCGAN on Kaggle's P100 GPU for 200 epochs was an exercise in patience and careful hyperparameter tuning. The architecture closely follows Sebastian Raschka's "Machine Learning with PyTorch and Scikit-Learn" guidelines, but even proven architectures can be temperamental with GANs.

## The Evolution of Artificial Creativity  

Watching the generated images evolve over training epochs is genuinely fascinating. Early on, the generator produces pure noise—random pixels with no pattern. Gradually, blob-like shapes emerge, then rough digit approximations, and finally convincing handwritten numbers that could fool the human eye.

The discriminator and generator losses dance around each other throughout training. Ideally, both should decrease and stabilize, indicating the generator is improving while the discriminator maintains its distinguishing ability. This balance is fragile—if the discriminator becomes too powerful, generator loss can explode as it struggles to fool an overly competent critic.

## Results and Key Insights

After 200 epochs, the DCGAN successfully learned to generate convincing handwritten digits with natural variation—some bold and clear, others thin and sketchy, with realistic randomness in stroke patterns and orientations.

Most intriguingly, the generator creates digits it never explicitly saw during training. Starting from random noise, every generated image is technically "new," yet they all conform to MNIST patterns. This demonstrates the model's ability to learn and generalize from underlying data distributions rather than simply memorizing examples.

## Lessons in Generative Modeling

This project reinforced several critical insights about GAN training:

- **Patience is essential**: GANs often take many epochs to produce meaningful results
- **Hyperparameters matter**: Learning rates, batch sizes, and architectures significantly impact stability  
- **Monitoring is crucial**: Watching both losses and generated samples helps detect problems early
- **Architecture choices count**: DCGAN's specific design (batch normalization, particular activations) dramatically improves stability over vanilla GANs

While MNIST digits might seem trivial compared to generating high-resolution faces or artwork, mastering these fundamentals provides solid groundwork for tackling more complex generative tasks. The project serves as an excellent introduction to adversarial training and the remarkable ability of neural networks to learn creative generation from data.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/DCGAN-on-MNIST' }
    ]
};

