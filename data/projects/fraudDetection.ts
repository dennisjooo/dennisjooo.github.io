import { Project } from './types';

export const fraudDetection: Project = {
    title: 'Comparative Analysis of Fraud Detection Models',
    description: 'Comparison of unsupervised learning models for fraud detection in financial transactions.',
    imageUrl: '/images/project/ae_creditfraud.webp',
    date: '2023-07-10',
    blogPost: `Payment card fraud is an ongoing major issue in the financial industry, causing substantial financial losses projected to reach 40 billion dollars in 2027. As the industry grows, detecting fraud patterns becomes inherently difficult, almost impossible to detect manually.

Nowadays, the design of payment card fraud detection techniques rely on the use of unsupervised machine learning studying an imbalanced dataset uncovering patterns and outliers.

We compared three unsupervised-learning models, namely K-Means Clustering, Gaussian Mixture, and AutoEncoder, in predicting transaction fraud. The idea of this project is to train each model with "clean" dataset which we have an abundance of and tune it to detect "novelties" which in this context are the fraudulent transactions.

Taken from Lopez-Rojas's Paysim dataset. It contains 6 million transactions, with 11 features. The dataset is highly imbalanced, with only 0.13% of the transactions being fraudulent.

The AutoEncoder method outperformed the other two methods with an AUC of 0.93. The reconstruction threshold was tuned to maximize the F1 score, which was 0.86.

The reason why the model was tuned the threshold to maximize the F1 score was because although it is important to minimise the number of false negatives, flagging a lot of transactions as fraudulent would be a hassle for the customers.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/Credit-Fraud-Detector' }
    ]
}; 