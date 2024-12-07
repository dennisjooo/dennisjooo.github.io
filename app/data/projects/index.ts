export * from './types';
export { actNatural } from './actNatural';
export { birdClassifier } from './birdClassifier';
export { wizardryBooks } from './wizardryBooks';
export { dcgan } from './dcgan';
export { fraudDetection } from './fraudDetection';
export { sarimaGoto } from './sarimaGoto';
export { allNbaPredictor } from './allNbaPredictor';

import { Project } from './types';
import { actNatural } from './actNatural';
import { birdClassifier } from './birdClassifier';
import { wizardryBooks } from './wizardryBooks';
import { dcgan } from './dcgan';
import { fraudDetection } from './fraudDetection';
import { sarimaGoto } from './sarimaGoto';
import { allNbaPredictor } from './allNbaPredictor';

export const projects: Project[] = [
    actNatural,
    birdClassifier,
    wizardryBooks,
    dcgan,
    fraudDetection,
    sarimaGoto,
    allNbaPredictor
]; 