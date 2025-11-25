import { Project } from './types';

export const allNbaPredictor: Project = {
    title: 'Will They Make All-NBA?',
    description: 'Can machine learning predict basketball greatness? Training models to forecast All-NBA team selections.',
    imageUrl: '/images/project/all_nba_pred.webp',
    date: '2022-05-26',
    blogPost: `Can machine learning predict basketball greatness? This was the central question driving my sixth semester Research and Methodology course final project. The challenge: use advanced basketball statistics to forecast which players will make the prestigious All-NBA teams, the sport's ultimate recognition of elite performance. Every year, the All-NBA selection process sparks heated debates about raw numbers, team success, and narrative, so I wondered: could data cut through the subjective noise and identify the statistical patterns that truly define elite performance?

## The Data and Methodology

Working with **Basketball-Reference.com's treasure trove** of advanced statistics, I analyzed player performance from the **1988-1989 season through 2020-2021**, over three decades of NBA evolution. Rather than basic box score numbers, the focus was on advanced metrics that better capture true player impact. I implemented three distinct machine learning approaches:

- **Logistic Regression** for clean interpretability
- **Random Forests** for pattern hunting through ensemble methods  
- **Multi-Layer Perceptron** for discovering non-linear relationships that human analysis might overlook

## The Ultimate Test

After training on decades of historical data, I put the models to the ultimate test: predicting the **2021-2022 All-NBA selections** before they were announced. This wasn't just an academic exercise, it was real-world validation of whether machine learning could identify elite performance in a completely new season with different players, evolving team dynamics, and shifting league contexts. 

The models revealed fascinating insights: *efficiency matters more than raw scoring volume*, team success still influences individual recognition despite advanced analytics, and position context dramatically affects what constitutes All-NBA performance.

## The Academic Journey

Writing the research paper in **Bahasa Indonesia** for my Indonesian university added an extra challenge, translating complex machine learning concepts while maintaining academic rigor. Presenting to classmates and professors who weren't necessarily familiar with advanced basketball statistics forced me to bridge the gap between technical machine learning and basketball domain knowledge. The process of defending methodology and discussing limitations proved as valuable as the modeling itself.

## Beyond Prediction

What made this project fascinating wasn't just the technical challenge, it was attempting to *reverse-engineer human decision-making*. All-NBA voting involves subjective elements that even sophisticated algorithms struggle to capture: clutch performance, leadership, narrative, and that intangible "basketball IQ." 

While the models performed admirably on historical data, they highlighted the beautiful unpredictability of sports. Sometimes the most valuable insights come not from getting predictions right, but from understanding why certain predictions go wrong, and what that teaches us about the complex relationship between statistics, human perception, and sporting excellence.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/All-NBA-Predictor' },
        { text: 'Deck', url: 'https://docs.google.com/presentation/d/190z_733eXOQEWJ3sTLA6T_b8lYXbDoYpxGR7XV6soXk/edit?usp=sharing' },
        { text: 'Paper', url: 'https://github.com/dennisjooo/All-NBA-Predictor/blob/master/Result.pdf' }
    ]
}; 