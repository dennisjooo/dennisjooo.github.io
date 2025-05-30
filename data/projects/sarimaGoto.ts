import { Project } from './types';

export const sarimaGoto: Project = {
    title: 'Predictive Modelling of Changes in GOTO Stock Prices using Historical and Exogenous Data with LSTM and SARIMAX',
    description: 'Can Twitter sentiment predict stock prices? Turns out LSTM + social media data beats traditional models.',
    imageUrl: '/images/project/stock_fp.webp',
    date: '2023-05-19',
    blogPost: `The COVID-19 pandemic didn't just change how we work and live—it revolutionized retail investing. Suddenly, everyone from college students to grandparents was trading stocks and sharing their thoughts on social media. This project explores a fascinating question: **Can we use Twitter sentiment and social media buzz to predict stock price movements?**

Spoiler alert: The answer is more nuanced and interesting than you might expect.

## The Perfect Storm: Pandemic Meets Social Trading

The pandemic created a unique laboratory for financial research. With lockdowns keeping people at home, we witnessed an unprecedented surge in retail investing. Social media platforms became the new trading floors, where investment advice, market sentiment, and stock discussions flourished like never before.

**GOTO (Gojek Tokopedia)**, Indonesia's tech giant and now GoTo Group, became the perfect test subject. As the country's largest technology company with a massive retail following, it exemplified how social media sentiment could influence stock movements in the modern market.

## The Data Challenge: Building a Multi-Modal View

### **Financial Foundation**
Working with historical stock data from Yahoo Finance spanning April 2022 to January 2023, I focused on daily price movements and volatility patterns. Rather than just closing prices, the analysis emphasized percentage changes and market dynamics that better capture investor sentiment and behavior.

### **Social Media Sentiment Mining**
This is where the project got really interesting. Instead of simply counting Twitter mentions, I performed comprehensive sentiment analysis to extract meaningful signals from the digital noise:

- **Sentiment polarity analysis** across the emotional spectrum
- **Tweet volume tracking** as attention and engagement indicators  
- **Social engagement metrics** including likes, retweets, and quote tweets
- **User influence scoring** weighted by follower count and engagement patterns

### **Pandemic Context Layer**
Given the pandemic backdrop, I incorporated daily COVID-19 case data for Indonesia as a proxy for economic uncertainty and market anxiety. This contextual information proved surprisingly valuable for understanding market psychology during volatile times.

## The Methodological Showdown: Old vs New

Two fundamentally different approaches competed to predict stock movements:

### **SARIMAX: The Time Series Veteran**
SARIMAX (Seasonal Auto-Regressive Integrated Moving Average with eXogenous factors) represents decades of econometric wisdom. This traditional approach brings several strengths:

- **Crystal-clear interpretability**: Every coefficient tells a story about market relationships
- **Statistical rigor**: Built-in hypothesis testing and confidence intervals provide reliability
- **Seasonal pattern recognition**: Naturally captures weekly and monthly trading cycles
- **Theoretical foundation**: Backed by decades of proven financial econometrics

SARIMAX excels at incorporating external factors while respecting the statistical properties of financial time series.

### **LSTM: The Deep Learning Challenger**
Long Short-Term Memory networks represent the cutting edge of sequence modeling. These neural networks bring a different set of superpowers:

- **Non-linear relationship discovery**: Finds complex patterns that linear models miss entirely
- **Automatic feature learning**: No need to manually specify variable relationships
- **Natural sequence handling**: Built for time-dependent data like stock prices
- **Multimodal data fusion**: Seamlessly combines price, sentiment, and contextual information

LSTMs use sophisticated memory mechanisms to selectively remember and forget information across long sequences—perfect for capturing the psychological patterns that drive markets.

## Feature Engineering: The Art of Signal Extraction

### **Sentiment Features That Mattered**
The sentiment analysis went far beyond basic positive/negative classification:

- **Rolling sentiment windows** capturing short and long-term mood trends
- **Sentiment momentum** measuring how quickly public opinion shifted
- **Volume-weighted sentiment** giving more importance to high-engagement discussions
- **Sentiment volatility** indicating consistency or chaos in public opinion

### **Market Psychology Indicators**
- **Technical indicators** showing price momentum and trend strength
- **Volatility measures** capturing market uncertainty and fear
- **Volume patterns** revealing institutional versus retail trading activity
- **Behavioral patterns** like day-of-week effects and timing biases

## The Showdown Results: When AI Meets Traditional Finance

The comprehensive evaluation revealed fascinating insights about modern market prediction. The LSTM model enhanced with social media sentiment and contextual data significantly outperformed traditional approaches across multiple metrics including prediction accuracy, directional forecasting, and risk-adjusted returns.

But the real story wasn't just about which model won—it was about what we learned along the way.

## The Feature Importance Revelation

Not all social media metrics proved equally valuable. The analysis revealed some surprising truths:

### **The Signal Champions**
- **Sentiment polarity**: The emotional tone of discussions provided the strongest predictive signal
- **Discussion volume**: Raw attention levels, regardless of sentiment, proved highly informative
- **Historical volatility**: Past market uncertainty remained the best predictor of future turbulence
- **Behavioral patterns**: Human trading habits created predictable weekly and daily cycles

### **The Signal Pretenders**
- **Vanity metrics**: Likes and follower counts showed virtually no predictive power
- **Quote tweets**: Often indicated negative or confused discussions that muddied the waters
- **Individual influence**: High-profile accounts didn't necessarily translate to market-moving predictions

This revealed a crucial insight: **Social media engagement ≠ Predictive value**

## Beyond the Numbers: What Really Drives Markets

### **Social Media Contains Real Alpha**
Contrary to efficient market theory, social media sentiment contained genuine predictive information about stock prices. The collective wisdom (and madness) of retail investors created measurable patterns that sophisticated models could capture and exploit.

### **Context Trumps Volume**
Quality beat quantity every time. A few thoughtful, well-timed posts often mattered more than thousands of mindless reactions. Market timing and sentiment context proved more valuable than raw engagement numbers.

### **Non-Linear Markets Need Non-Linear Models**
The LSTM's superior performance highlighted that financial markets are fundamentally non-linear systems. Traditional statistical approaches, while interpretable, often miss the complex interactions that drive real market behavior.

### **Feature Engineering Beats Algorithm Sophistication**
Success came not from using the most advanced models, but from thoughtful feature construction that captured market psychology and behavioral patterns. Understanding the problem domain proved more valuable than throwing compute power at it.

## Real-World Deployment Challenges

### **Technical Hurdles**
Building a research model is one thing; deploying it in production is entirely another:

- **API limitations** constrained real-time social media data collection
- **Processing latency** for sentiment analysis created delays in time-sensitive trading decisions
- **Computational requirements** for real-time LSTM inference needed optimization

### **Market Reality Checks**
- **Sentiment volatility** could create false signals during major news events
- **Model degradation** as market conditions and social media patterns evolved
- **Regulatory considerations** for algorithmic trading in different jurisdictions

## The Broader Implications: Finance in the Digital Age

This research represents more than just successful stock prediction—it's a window into the future of finance. We're witnessing a fundamental shift where alternative data sources become as important as traditional financial statements.

### **The New Market Landscape**
- **Democratized information**: Social media gives retail investors unprecedented influence
- **Real-time sentiment**: Market psychology becomes instantly measurable and actionable
- **Behavioral finance at scale**: Collective digital behavior drives price movements
- **Algorithm arms race**: Sophisticated models compete to extract alpha from alternative data

## Lessons Learned: Beyond the Technical

### **Domain Knowledge Matters**
Understanding financial markets, trading psychology, and social media dynamics proved as important as technical modeling skills. The best features came from financial intuition, not mathematical sophistication.

### **Data Quality Over Quantity**
Clean, relevant sentiment data beat massive, noisy datasets every time. Thoughtful data collection and preprocessing created more value than simply scraping everything available.

### **Model Interpretability vs Performance Trade-offs**
While LSTM models performed better, SARIMAX provided clearer insights into market relationships. The best approach often involves ensemble methods that balance performance with understanding.

## Looking Forward: The Future of Sentiment-Driven Trading

### **Next-Generation Enhancements**
- **Multi-platform analysis**: Incorporating Reddit, Discord, TikTok, and other social platforms
- **Real-time news integration**: Combining social sentiment with breaking news analysis
- **Cross-asset applications**: Extending to crypto, forex, and commodity markets
- **Behavioral pattern recognition**: Identifying whale movements and coordinated trading activities

### **Broader Market Evolution**
The integration of social media sentiment into financial modeling represents a fundamental shift in how markets process information. We're moving from a world where professional analysts drove prices to one where collective digital behavior creates measurable market forces.

## The Takeaway: Markets in the Age of Social Media

The LSTM's victory over traditional methods reflects a deeper truth about modern markets: they're increasingly driven by collective digital behavior rather than just fundamental analysis. Retail investors now influence price movements through coordinated social media activity, creating new patterns that traditional models struggle to capture.

This research proved that in our hyperconnected world, the crowd's digital whispers can be as predictive as corporate earnings reports—you just need the right tools to listen. The challenge isn't just building better models; it's understanding the evolving relationship between technology, human psychology, and market dynamics in the digital age.`,
    links: []
}; 