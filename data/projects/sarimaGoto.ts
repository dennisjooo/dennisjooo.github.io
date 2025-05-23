import { Project } from './types';

export const sarimaGoto: Project = {
    title: 'Predictive Modelling of Changes in GOTO Stock Prices using Historical and Exogenous Data with LSTM and SARIMAX',
    description: 'Comparison of SARIMAX and LSTM models for predicting stock price changes using historical and social media data.',
    imageUrl: '/images/project/stock_fp.webp',
    date: '2023-05-19',
    blogPost: `Stock investment experienced an increase in investors during the Covid-19 pandemic era, thus creating a situation where many investors held discussions and shared news about stocks on social media, one of which was Twitter. The purpose of this study is to compare performance and find the best model from the SARIMAX (Seasonal Auto-Regressive Integrated Moving Average with eXogenous factors) and LSTM (Long Short-Term Memory) models in predicting changes in stock prices and find out significant exogenous variables in making predictions. This research was made to answer what models can predict changes in stock prices and what exogenous variables can be used for the model.

The data was taken from April 11th, 2022 up to January 31st, 2023. The historical stock prices was taken from Yahoo Finance!. Sentiments for this research was gathered from Twitter/X. Last, the daily increase of Covid-19 cases was taken from the Covid-19 API (which is now deprecated).

The LSTM with exogenous variables, which were the tweet sentiment and metadata along with new Covid-19 cases in Indonesia outperformed all other candidate models. That being said, we have found that not all exogenous variables were important for the model itself, the number of likes and quote tweets being the two worst contributors.`,
    links: []
}; 