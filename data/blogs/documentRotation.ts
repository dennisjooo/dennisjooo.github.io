import { Blog } from './types';

export const documentRotation: Blog = {
    type: 'project',
    title: 'Straightening the Mess',
    description: 'Sometimes a slight nudge is all it takes to get documents straight',
    imageUrl: '/images/project/rotation_model.webp',
    date: '2025-05-20',
    blogPost: `This project started as a missing piece in our OCR pipeline at work, documents were coming in at all sorts of crazy angles! I took on the challenge of building a model to automatically detect and correct document orientation, creating a robust system that could handle **8 different rotation classes** (0° to 315° in 45° increments) efficiently. Rather than go with a massive model, I focused on efficiency and landed on **MobileNetV3-small** as the backbone, then enhanced it with two key architectural innovations that made all the difference.

## The Architecture: Small but Mighty

The foundation was **MobileNetV3-small**, perfect for production deployment, lightweight enough for mobile devices but powerful enough for accurate predictions. The first enhancement was **CoordConv (Coordinate Convolutions)**, my first deep dive into this technique that adds coordinate channels to the input, essentially giving the network a "GPS system" for understanding spatial position. 

Traditional convolutions are translation-invariant, which sounds good but can be problematic for rotation detection where *absolute position matters*, CoordConv helps distinguish between a rotated page with text in the top-left versus bottom-right.

## Attention and Training Strategy

The second key addition was **CBAM (Convolutional Block Attention Module)**, which applies attention along both spatial and channel dimensions. This dual-attention mechanism works beautifully:
- **Channel attention** identifies which features are most important (text vs. background)
- **Spatial attention** pinpoints where those features are most relevant

Training data came from three diverse sources to ensure broad applicability:
- **RVL-CDIP** for real-world government and corporate documents
- **PubLayNet** for academic papers with different layouts  
- **MIDV-500** for identity documents with structured layouts

This diversity was crucial since documents in the wild vary dramatically in layout, text density, and visual characteristics. The **dual-head output** architecture predicts both rotation class and confidence score, with the confidence head proving invaluable for production deployment, knowing when the model is uncertain allows for human fallback.

## Production Impact

In our OCR pipeline, document rotation was a *silent killer*, slightly rotated documents would produce garbled text extraction, requiring manual intervention. This model automated the correction step, dramatically improving downstream OCR accuracy. 

The **8-class approach** struck the right balance between precision and practical utility, and while arbitrary angle detection would be more elegant, most real-world document rotation falls into these discrete categories. The project perfectly captures what I love about applied machine learning: starting with a real-world problem, diving deep into technical solutions like **CoordConv** and **CBAM**, and ending up with something that actually makes a difference in production systems.`,
    links: [{ text: 'Github', url: 'https://github.com/dennisjooo/rotation-model' }]
};
