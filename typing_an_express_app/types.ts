export interface DiagnosisEntry {
    code : string;
    name: string;
    latin? : string;
}

export interface Patient {
    id: string,
    name: string,
    gender: string,
    occupation: string,
    dateOfBirth: string,
    ssn: string
}
