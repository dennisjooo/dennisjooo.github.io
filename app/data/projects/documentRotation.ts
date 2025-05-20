import { Project } from './types';

export const documentRotation: Project = {
    title: 'Document Rotation Classification',
    description: 'Sometimes a slight nudge is all it takes to get documents straight',
    imageUrl: '/images/project/rotation_model.webp',
    date: '2025-05-20',
    blogPost: `This project started as a missing piece in our OCR pipeline at work – documents were coming in at all sorts of crazy angles! I took on the challenge of building a model to automatically detect and correct document orientation. It turned into a great learning experience, especially diving into how CoordConv layers can improve spatial awareness and how CBAM attention mechanisms help the model focus on the important parts of a document.

The goal was to create a robust model that could handle 8 different rotation classes (0° to 315° in 45° increments) efficiently. I landed on using a MobileNetV3-small backbone, enhanced with the aforementioned CoordConv and CBAM. The model has a dual-head output, one for the rotation class and another for a confidence score.

It's trained on a mix of datasets like RVL-CDIP, PubLayNet, and MIDV-500 to ensure it works well on various document types. The whole thing is built with PyTorch Lightning, and I've set up Wandb for logging. It even supports ONNX export.

Key features include:
- 8-class rotation detection with confidence.
- Efficient MobileNetV3-small architecture.
- Learned a lot about and implemented CoordConv and CBAM.
- Trained on diverse datasets for broad applicability.

While it started as a specific fix, it's become a pretty versatile tool. Next up, I'm thinking about tackling arbitrary angle detection!`,
    links: [{ text: 'Github', url: 'https://github.com/dennisjooo/rotation-model' }]
};
