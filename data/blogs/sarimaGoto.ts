import { Blog } from './types';

export const sarimaGoto: Blog = {
    type: 'project',
    title: 'Can Twitter Predict the Stock Market?',
    description: 'Can Twitter sentiment predict stock prices? Turns out LSTM + social media data beats traditional models.',
    imageUrl: '/images/project/stock_fp.webp',
    date: '2023-05-19',
    blogPost: `The COVID-19 pandemic didn't just change how we work and live, it revolutionized retail investing. Suddenly, everyone from college students to grandparents was trading stocks and sharing their thoughts on social media. This project explores a fascinating question: **Can we use Twitter sentiment and social media buzz to predict stock price movements?** 

With lockdowns keeping people at home, we witnessed an unprecedented surge in retail investing where social media platforms became the new trading floors, making **GOTO (Gojek Tokopedia)**, Indonesia's tech giant, the perfect test subject for studying how social media sentiment could influence stock movements.

## Building a Multi-Modal Dataset

I built a multi-modal approach combining financial data from Yahoo Finance with comprehensive social media sentiment mining. Instead of simply counting Twitter mentions, I performed deep sentiment analysis extracting:

- **Emotional polarity** across the sentiment spectrum
- **Tweet volume tracking** as attention indicators
- **Social engagement metrics** including likes and retweets  
- **User influence scoring** weighted by followers and engagement

Given the pandemic backdrop, I also incorporated daily COVID-19 case data for Indonesia as a proxy for economic uncertainty, creating a rich dataset spanning April 2022 to January 2023 with percentage changes and market dynamics that better capture investor sentiment.

## The Model Showdown: Traditional vs. Modern

Two fundamentally different approaches competed to predict stock movements:

**SARIMAX** (the time series veteran):
- Crystal-clear interpretability and statistical rigor
- Built-in hypothesis testing and seasonal pattern recognition  
- Decades of econometric wisdom

**LSTM** (the deep learning challenger):
- Non-linear relationship discovery and automatic feature learning
- Sophisticated memory mechanisms for psychological market patterns
- Natural handling of multimodal data fusion

## Signal Quality vs. Noise

The comprehensive evaluation revealed that the **LSTM model enhanced with social media sentiment** significantly outperformed traditional approaches across multiple metrics. The analysis revealed surprising truths about signal quality: 

- **Sentiment polarity and discussion volume** provided the strongest predictive signals
- *Vanity metrics* like likes and follower counts showed virtually no predictive power

This highlighted a crucial insight: **social media engagement ≠ predictive value**, quality beat quantity every time.

## The Future of Finance

The research represents more than just successful stock prediction, it's a window into the future of finance where alternative data sources become as important as traditional financial statements. We're witnessing a fundamental shift where **retail investors now influence price movements through coordinated social media activity**, creating new patterns that traditional models struggle to capture. 

The LSTM's victory over traditional methods reflects a deeper truth about modern markets: they're increasingly driven by *collective digital behavior* rather than just fundamental analysis, proving that in our hyperconnected world, the crowd's digital whispers can be as predictive as corporate earnings reports.`,
    links: []
}; 