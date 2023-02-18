import { Patient } from "../../types";
import patientData from '../data/patients';

const patients : Patient[] = patientData;

const getNonSensitiveEntries = (): Omit<Patient, 'ssn'>[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

export default { getNonSensitiveEntries };
