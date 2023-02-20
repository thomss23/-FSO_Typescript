
export interface DiagnosisEntry {
    code : string;
    name: string;
    latin? : string;
}

export interface Patient {
    id: string,
    name: string,
    gender: Gender,
    occupation: string,
    dateOfBirth: string,
    ssn: string
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}

export type NewPatientEntry = Omit<Patient, 'id'>;