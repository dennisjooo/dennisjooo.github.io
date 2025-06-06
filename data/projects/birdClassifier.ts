import { Project } from './types';

export const birdClassifier: Project = {
    title: 'Bird Classifier on EfficientNet-B2',
    description: "Ever wondered what bird you're looking at? This classifier has over 90k downloads on HuggingFace's model hub.",
    imageUrl: '/images/project/birb_classifier.webp',
    date: '2023-11-05',
    blogPost: `Ever wondered what bird you're looking at during your morning walk? That's exactly the problem this project tackles using state-of-the-art computer vision. What started as a bootcamp assignment for Ruangguru's Engineering Academy became a model with over **90,000 downloads** on HuggingFace's model hub. This was my deep dive into transfer learning and computer vision, building an image classifier that can identify 525 different bird species from a single photo.

## The Challenge

Bird classification is surprisingly tricky for AI—many species look remarkably similar, and distinguishing between a House Sparrow and a Eurasian Tree Sparrow requires noticing minute differences in head markings. Add varying lighting, partial occlusion by branches, and different poses, and you've got a genuinely challenging computer vision problem. 

The solution leverages **EfficientNet-B2**, a mobile-optimized architecture that balances accuracy with computational efficiency, using transfer learning from ImageNet-1K and fine-tuning on Gpiosenka's comprehensive dataset of:
- **525 distinct species** with global representation
- **84,635 training images** for robust pattern learning

## Technical Implementation

The training strategy involved:
1. *Freezing the backbone layers* initially
2. *Replacing the classification head*
3. *Gradually unfreezing layers* with discriminative learning rates

This approach prevents catastrophic forgetting while adapting to bird-specific features. Using **PyTorch Lightning** for clean, scalable training code and **Kaggle's P100 GPU** for the heavy lifting, the model achieved **99% validation accuracy** after just 26 epochs—approaching human-expert level performance for many species pairs.

## Community Impact

The real validation came from the community: **90,000+ downloads** on HuggingFace Hub, with users deploying it in:
- *Citizen science projects* for biodiversity monitoring
- *Educational apps* for biology courses  
- *Mobile apps* for bird watching enthusiasts
- *Research applications* in ecology and conservation

One of the most memorable aspects was my **first HuggingFace discussion** when a user asked about converting the model to ONNX format for their mobile app—what seemed like a simple request became a deep dive into model deployment pipelines and cross-platform optimization.

## Key Lessons

This project reinforced several important lessons: 
- **Transfer learning is incredibly powerful** as ImageNet pre-training provided an enormous head start
- **Community engagement adds real value** since users revealed deployment needs I never considered
- **Model accuracy is just the beginning**—real impact comes from accessibility and practical deployment

The journey from bootcamp assignment to 90,000+ downloads proves that with solid technical foundations and community engagement, student projects can create genuine real-world impact.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/Birds-Classifier-EfficientNetB2' },
        { text: 'HuggingFace', url: 'https://huggingface.co/dennisjooo/Birds-Classifier-EfficientNetB2' }
    ]
}; 