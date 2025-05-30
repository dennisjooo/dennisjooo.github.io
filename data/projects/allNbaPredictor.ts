import { Project } from './types';

export const allNbaPredictor: Project = {
    title: 'All-NBA-Predictor',
    description: 'Can machine learning predict basketball greatness? Training models to forecast All-NBA team selections.',
    imageUrl: '/images/project/all_nba_pred.webp',
    date: '2022-05-26',
    blogPost: `Can machine learning predict basketball greatness? This was the central question driving my sixth semester Research and Methodology course final project. The challenge: use advanced basketball statistics to forecast which players will make the prestigious All-NBA teams—the sport's ultimate recognition of elite performance.

Every year, the All-NBA selection process sparks heated debates. Is it about raw numbers? Team success? Narrative? I wondered: could data cut through the subjective noise and identify the statistical patterns that truly define elite performance?

## The Prediction Challenge

This project attempted to predict All-NBA selections using three distinct machine learning approaches: **Logistic Regression**, **Random Forests**, and a **Multi-Layer Perceptron**. The aim was to predict the probability for each player in a given season to be selected for any of the All-NBA teams.

The beauty of this problem lies in its complexity—All-NBA selection isn't just about scoring averages or basic stats. It's about efficiency, impact, defensive contribution, and that indefinable quality we call "greatness."

## Data Deep Dive: Three Decades of Excellence

Working with **Basketball-Reference.com's treasure trove** of advanced statistics, I analyzed player performance from the **1988-1989 season through 2020-2021**—over three decades of NBA evolution. Rather than basic box score numbers, the focus was on advanced metrics that better capture true player impact.
These metrics paint a more nuanced picture of player excellence than traditional counting stats.

## The Three-Model Showdown

### **Logistic Regression: The Transparent Predictor**
Clean, interpretable, and statistically rigorous. Every coefficient tells a story about what drives All-NBA selection, making it perfect for understanding voter behavior and statistical priorities.

### **Random Forest: The Pattern Hunter**
An ensemble approach combining multiple decision trees to capture complex interactions between statistics while maintaining interpretability through feature importance rankings.

### **Multi-Layer Perceptron: The Deep Learner**
The neural network approach, designed to discover non-linear patterns and hidden relationships in the advanced statistics that human analysis might overlook.

## The Ultimate Test: 2021-2022 Season Validation

Here's where it got interesting. After training on decades of historical data, I put the models to the ultimate test: predicting the **2021-2022 All-NBA selections** before they were announced.

This wasn't just an academic exercise—it was a real-world validation of whether machine learning could identify elite performance in a completely new season with different players, evolving team dynamics, and shifting league contexts.

## Insights Beyond the Algorithm

### **The Efficiency Revolution**
The models revealed that raw scoring volume matters less than shooting efficiency and advanced impact metrics. The NBA's evolution toward analytics-driven evaluation showed clearly in the data patterns.

### **Team Success Still Matters**
Individual brilliance on bad teams faces an uphill battle for All-NBA recognition. The models picked up on this human bias toward winning, even in supposedly objective statistical analysis.

### **Position Context is Everything**
What constitutes All-NBA performance varies dramatically by position. A center's path to recognition looks fundamentally different from a guard's in the statistical landscape.

## The Academic Journey

Writing the research paper in **Bahasa Indonesia** for my Indonesian university added an extra layer of challenge—translating complex machine learning concepts while maintaining academic rigor. The process of defending methodology, discussing limitations, and contextualizing results within sports analytics literature proved as valuable as the modeling itself.

Presenting to classmates and professors who weren't necessarily familiar with advanced basketball statistics forced me to bridge the gap between technical machine learning and basketball domain knowledge.

## The Mystery of Human Judgment

What made this project fascinating wasn't just the technical challenge—it was attempting to reverse-engineer human decision-making. All-NBA voting involves subjective elements that even the most sophisticated algorithms struggle to capture: clutch performance, leadership, narrative, and that intangible quality we call "basketball IQ."

The models performed admirably on historical data, but the real question remained: could they truly predict the unpredictable nature of human judgment in the 2021-2022 validation?

## Beyond Basketball: Lessons in Prediction

This project reinforced several crucial insights about machine learning in subjective domains:

### **Domain Knowledge is King**
Understanding basketball context—why certain statistics matter, how positions differ, what voters value—proved as important as technical modeling expertise.

### **Feature Engineering Beats Model Sophistication**
Success came from thoughtful selection of meaningful statistics rather than throwing the most advanced algorithms at the problem.

### **Validation Humbles Theory**
Academic performance on historical data tells only part of the story. Real-world testing provides humbling reality checks that cross-validation can't replicate.

## The Verdict

Did machine learning crack the code of basketball greatness? The 2021-2022 validation provided some answers—but like any good sports story, the results sparked as many new questions as they resolved.

One thing became clear: while algorithms can identify statistical patterns and even predict human behavior to some degree, sports will always retain that beautiful element of unpredictability. The models didn't replace human judgment, but they offered a fascinating data-driven lens for understanding what elite performance looks like when you strip away the narratives and focus purely on what happens between the lines.

Sometimes the most valuable insights come not from getting predictions right, but from understanding why certain predictions go wrong—and what that teaches us about the complex relationship between statistics, human perception, and sporting excellence.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/All-NBA-Predictor' },
        { text: 'Deck', url: 'https://docs.google.com/presentation/d/190z_733eXOQEWJ3sTLA6T_b8lYXbDoYpxGR7XV6soXk/edit?usp=sharing' },
        { text: 'Paper', url: 'https://github.com/dennisjooo/All-NBA-Predictor/blob/master/Result.pdf' }
    ]
}; 