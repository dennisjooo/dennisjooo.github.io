import { Project } from './types';

export const documentRotation: Project = {
    title: 'Document Rotation Classification',
    description: 'Sometimes a slight nudge is all it takes to get documents straight',
    imageUrl: '/images/project/rotation_model.webp',
    date: '2025-05-20',
    blogPost: `This project started as a missing piece in our OCR pipeline at work—documents were coming in at all sorts of crazy angles! I took on the challenge of building a model to automatically detect and correct document orientation. What began as a practical workplace solution turned into a deep learning adventure with some fascinating architectural innovations.

The goal was to create a robust model that could handle **8 different rotation classes** (0° to 315° in 45° increments) efficiently. Rather than go with a massive model, I focused on efficiency and landed on **MobileNetV3-small** as the backbone, then enhanced it with two key components that made all the difference.

## The Architecture: Small but Mighty

### **MobileNetV3-Small Foundation**
Perfect for production deployment—lightweight enough for mobile devices but powerful enough for accurate predictions. The depthwise separable convolutions keep the parameter count low while maintaining strong feature extraction capabilities.

### **CoordConv: Teaching Spatial Awareness**
This was my first deep dive into **Coordinate Convolutions**, and wow, what a difference they make! Traditional convolutions are translation-invariant, which sounds good in theory but can be problematic for rotation detection where absolute position matters.

CoordConv adds coordinate channels to the input, essentially giving the network a "GPS system" for understanding where it is in the image. For document rotation, this spatial awareness helps distinguish between, say, a rotated page with text in the top-left versus bottom-right—subtle but crucial differences.

### **CBAM: Focused Attention**
**Convolutional Block Attention Module (CBAM)** became my second favorite addition. It applies attention along both spatial and channel dimensions, helping the model focus on the most informative parts of the document—usually text regions and document edges that provide the strongest rotation cues.

The dual-attention mechanism works beautifully: channel attention identifies which features are most important (text vs. background), while spatial attention pinpoints where those features are most relevant.

## Training Strategy: Real-World Diversity

Training data came from three diverse sources to ensure broad applicability:

- **RVL-CDIP**: Real-world document variety from government and corporate sources
- **PubLayNet**: Academic papers and scientific documents with different layouts
- **MIDV-500**: Identity documents with structured layouts and specific orientations

This diversity was crucial—documents in the wild vary dramatically in layout, text density, and visual characteristics. A model trained only on academic papers might struggle with invoices or forms.

The **dual-head output** architecture predicts both rotation class and confidence score. The confidence head proved invaluable for production deployment—knowing when the model is uncertain allows for human fallback or alternative processing.

## Technical Implementation: PyTorch Lightning + Wandb

Built with **PyTorch Lightning** for clean, scalable training code and **Wandb** for experiment tracking. Lightning's modularity made it easy to experiment with different backbones and attention mechanisms, while Wandb's logging helped optimize hyperparameters and monitor training dynamics.

The **ONNX export** capability was essential for production deployment. Converting from PyTorch to ONNX format enables inference across different platforms and deployment scenarios without being tied to specific frameworks.

## Real-World Impact: From Problem to Solution

In our OCR pipeline, document rotation was a silent killer—slightly rotated documents would produce garbled text extraction, requiring manual intervention. This model automated the correction step, dramatically improving downstream OCR accuracy.

The **8-class approach** (45° increments) struck the right balance between precision and practical utility. While arbitrary angle detection would be more elegant, most real-world document rotation falls into these discrete categories, and the classification approach proved more robust than regression for this use case.

## Key Technical Learnings

### **CoordConv is Underrated**
Adding coordinate information seems simple, but its impact on spatial tasks is profound. For any computer vision problem where absolute position matters, CoordConv should be in your toolkit.

### **Attention Mechanisms Transfer Well**
CBAM, originally designed for general image classification, adapted beautifully to document analysis. The spatial attention particularly excelled at focusing on text regions while ignoring background noise.

### **Dataset Diversity Beats Size**
Training on three different document types produced a more robust model than using massive amounts of data from a single source. Real-world deployment demands this kind of distribution coverage.

### **Confidence Estimation is Production Gold**
The dual-head approach with confidence scoring transformed this from an academic exercise into a production-ready system. Knowing when to trust the model's predictions is as important as the predictions themselves.

## Looking Forward: Arbitrary Angles

While the current 8-class system works well for most use cases, I'm already thinking about the next iteration: **arbitrary angle detection**. Moving from classification to regression would enable correction of any rotation angle, not just 45° increments.

The challenge will be maintaining the current model's robustness while handling the increased complexity of continuous angle prediction. It's the kind of problem that gets me excited—taking a working solution and pushing it to the next level of capability.

This project perfectly captures what I love about applied machine learning: starting with a real-world problem, diving deep into the technical solutions, and ending up with something that actually makes a difference in production systems. Sometimes the best projects aren't the most theoretically complex—they're the ones that solve real problems elegantly.`,
    links: [{ text: 'Github', url: 'https://github.com/dennisjooo/rotation-model' }]
};
