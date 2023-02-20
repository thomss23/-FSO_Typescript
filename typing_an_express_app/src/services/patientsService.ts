import { NewPatientEntry, Patient } from "../../types";
import patientData from '../data/patients';
import { v1 as uuid } from 'uuid';
import { toNewPatientEntry } from "../../utils";


const patients : Patient[] = patientData.map(pd =>  {
    const object = toNewPatientEntry(pd) as Patient;
    object.id = pd.id;
    return object; 
});

const getNonSensitiveEntries = (): Omit<Patient, 'ssn'>[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (newPatientEntry : NewPatientEntry) : Patient => {
    const id = uuid();

    const patientEntry = {...newPatientEntry, id: id};
    patients.push(patientEntry);

    return patientEntry;
};

export default { getNonSensitiveEntries, addPatient };
