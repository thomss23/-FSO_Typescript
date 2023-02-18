import { DiagnosisEntry } from '../../types';
import diagnosesData from '../data/diagnoses';

const diagnoses : DiagnosisEntry[] = diagnosesData;

const getDiagnoses = () : DiagnosisEntry[] => {
    return diagnoses;
};

export default {
    getDiagnoses
};