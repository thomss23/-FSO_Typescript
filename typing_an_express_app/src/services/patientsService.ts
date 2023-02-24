import { NewPatientEntry, NonSensitivePatient, Patient } from "../../types";
import patientData from '../data/patients';
import { v1 as uuid } from 'uuid';
import { toNewPatientEntry } from "../../utils";


const patients : Patient[] = patientData.map(pd =>  {
    const object = toNewPatientEntry(pd) as Patient;
    object.id = pd.id;
    return object; 
});

const getNonSensitiveEntries = (): NonSensitivePatient[] => {
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


const getPatient = (id: string): Patient | undefined => {
    const patient = patients.find((p) => p.id === id);
    return patient;
};
  


export default { getNonSensitiveEntries, addPatient, getPatient };
