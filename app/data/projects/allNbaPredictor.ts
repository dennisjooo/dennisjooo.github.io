import { Project } from './types';

export const allNbaPredictor: Project = {
    title: 'All-NBA-Predictor',
    description: 'Predicting All-NBA selections using various machine learning models.',
    imageUrl: '/images/project/all_nba_pred.webp',
    date: '2022-05-26',
    blogPost: `This project attempted to predict the All-NBA selections using Logistic Regression, Random Forests, and a Multi-Layer Perceptron. The aim for the project was to predict the probability for each player in a given season to be selected in either one of the All-NBA teams. The project was done for my sixth semester's Research and Methodology course final project. Paper for the project is available in this repo, but it is written in Bahasa Indonesia.

The data for the project was taken from Basketball-reference.com. The inputs for the models were Advanced Statistics for each players from the 1988-1989 season up to and including the 2020-2021 season. In order to validate the performance of the best model, the Advanced Statistics for the 2021-2022 season was used to predict the season's All-NBA selection.`,
    links: [
        { text: 'Github', url: 'https://github.com/dennisjooo/Credit-Fraud-Detector' },
        { text: 'Deck', url: 'https://docs.google.com/presentation/d/190z_733eXOQEWJ3sTLA6T_b8lYXbDoYpxGR7XV6soXk/edit?usp=sharing' },
        { text: 'Paper', url: 'https://github.com/dennisjooo/All-NBA-Predictor/blob/master/Result.pdf' }
    ]
}; 