import { Project } from './types';

export const fraudDetection: Project = {
    title: 'Comparative Analysis of Fraud Detection Models',
    description: 'Hunting down financial criminals with machine learning. AutoEncoders won this round with 93% accuracy.',
    imageUrl: '/images/project/ae_creditfraud.webp',
    date: '2023-07-10',
    blogPost: `Payment card fraud is an ongoing major issue in the financial industry, causing substantial financial losses projected to reach 40 billion dollars by 2027. As the industry grows, detecting fraud patterns becomes inherently difficult, almost impossible to detect manually.

This project tackles a fundamental question: can we teach machines to spot fraudulent transactions by showing them only what "normal" looks like?

## The Anomaly Detection Challenge

The modern approach to payment card fraud detection relies on unsupervised machine learning studying highly imbalanced datasets to uncover patterns and outliers. The core insight? Rather than trying to define what fraud looks like (since criminals constantly adapt), train models on abundant "clean" data and tune them to detect "novelties"—transactions that don't fit the normal patterns.

Working with **Lopez-Rojas's PaySim dataset** containing 6 million transactions across 11 features, the challenge was immediately apparent: only **0.13%** of transactions were fraudulent. Finding fraud in this context truly becomes like searching for needles in haystacks.

## Three Approaches to Digital Detective Work

I compared three unsupervised learning models to see which could best identify anomalous transactions:

### **K-Means Clustering**
The clustering approach: group normal transactions into clusters, then flag anything that falls far from established cluster centers as potentially fraudulent.

### **Gaussian Mixture Models (GMM)**
The probabilistic method: model normal transactions as mixtures of Gaussian distributions, flagging transactions with low probability under the learned model.

### **AutoEncoder Neural Networks**
The reconstruction strategy: train neural networks to compress and reconstruct normal transactions accurately. High reconstruction error signals anomalous (potentially fraudulent) behavior.

## The Winner: AutoEncoder Excellence

The **AutoEncoder method outperformed the other approaches with an AUC of 0.93**, demonstrating superior ability to distinguish between normal and fraudulent transactions. The model's strength lay in its capacity to capture non-linear relationships and automatically discover relevant feature representations that traditional methods missed.

## The Art of Threshold Tuning

A critical aspect of fraud detection is finding the right balance. **The reconstruction threshold was carefully tuned to maximize the F1 score, achieving 0.86**. This optimization was crucial because while minimizing false negatives (missing actual fraud) is important, flagging too many legitimate transactions as fraudulent creates significant customer frustration.

The F1 score provided the perfect balance—ensuring we catch fraud without overwhelming customers with false alarms.

## Key Insights: Beyond the Algorithm

### **The Clean Data Advantage**
Training exclusively on legitimate transactions proved more effective than trying to learn from fraudulent examples. This approach mimics reality—normal patterns are abundant and stable, while fraud patterns constantly evolve.

### **Feature Learning vs. Manual Engineering**
The AutoEncoder's automatic feature discovery outperformed hand-crafted features, revealing subtle transaction patterns that human domain expertise might miss.

### **The Imbalance Paradox**
With only 0.13% fraudulent transactions, traditional accuracy metrics become meaningless. A model that flags everything as legitimate would be 99.87% "accurate" but completely useless for fraud detection.

## Real-World Deployment Reality

Building a research model is just the beginning. Production fraud detection systems face additional challenges:

- **Latency constraints**: Real-time transaction processing demands sub-second detection
- **Evolving fraud patterns**: Criminals adapt faster than models can retrain
- **Explainability requirements**: Financial institutions must justify why transactions are flagged
- **Customer experience balance**: False positives directly impact user satisfaction

## The Ongoing Arms Race

This project highlighted that fraud detection is fundamentally an arms race between increasingly sophisticated detection methods and constantly adapting criminal tactics. The AutoEncoder's success represents a significant step forward, but the real challenge lies in building systems that can adapt and evolve alongside emerging threats.

The most sophisticated algorithm is worthless if it can't adapt to new fraud patterns or if its false positive rate makes it impractical for real-world deployment. Success in fraud detection requires balancing technical excellence with business practicality—protecting customers while maintaining seamless user experiences.

The war against financial crime continues, and machine learning provides powerful weapons in this digital battlefield. The key is choosing the right tools and wielding them wisely.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/Credit-Fraud-Detector' }
    ]
}; 