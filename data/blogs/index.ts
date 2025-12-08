export * from './types';
export { actNatural } from './actNatural';
export { birdClassifier } from './birdClassifier';
export { wizardryBooks } from './wizardryBooks';
export { dcgan } from './dcgan';
export { fraudDetection } from './fraudDetection';
export { sarimaGoto } from './sarimaGoto';
export { allNbaPredictor } from './allNbaPredictor';
export { documentRotation } from './documentRotation';
export { moodList } from './moodList';

import { Blog } from './types';
import { actNatural } from './actNatural';
import { birdClassifier } from './birdClassifier';
import { wizardryBooks } from './wizardryBooks';
import { dcgan } from './dcgan';
import { fraudDetection } from './fraudDetection';
import { sarimaGoto } from './sarimaGoto';
import { allNbaPredictor } from './allNbaPredictor';
import { documentRotation } from './documentRotation';
import { moodList } from './moodList';

export const projects: Blog[] = [
    moodList,
    actNatural,
    birdClassifier,
    wizardryBooks,
    dcgan,
    fraudDetection,
    sarimaGoto,
    allNbaPredictor,
    documentRotation
]; 