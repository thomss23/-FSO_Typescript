import { Entry, Gender, NewPatientEntry } from "./types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(g => g.toString()).includes(param);
};

const parseStringType  = (name: unknown, type : string) : string => {
    if(!isString(name)) {
        throw new Error(`Incorrect or missing ${type}`);
    }
    
    return name;
};

const parseGender = (gender : unknown) : Gender => {
    if(!isString(gender) || !isGender(gender)) {
        throw new Error(`Incorrect or missing ${gender}`);
    }
    return gender;
};

const parseDateOfBirth = (date: unknown): string => {
    if (!isString(date) || !isDate(date)) {
        throw new Error('Incorrect date: ' + date);
    }
    return date;
};

const parseEntries = (entries: unknown): Entry[] => {
    if (!entries || !Array.isArray(entries) || !entries.every(e => isEntry(e))) {
      throw new Error(`Incorrect or missing entries`);
    }
    return entries;
  }
  
  const isEntry = (entry: unknown): entry is Entry => {
    // add your own typeguard to determine if an object is an Entry
    if(isString(entry)) {
        return true;
    }
    throw new Error(`Incorrect or missing entries`);
  }

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
    }

    if ('name' in object && 'gender' in object && 'occupation' in object && 'dateOfBirth' in object && 'ssn' in object && 'entries' in object)  {
        const newEntry: NewPatientEntry = {
        name: parseStringType(object.name, 'name'),
        gender: parseGender(object.gender),
        occupation: parseStringType(object.occupation, 'occupation'),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseStringType(object.ssn, 'ssn'),
        entries: parseEntries(object.entries)
        };

        return newEntry;
    }

    throw new Error('Incorrect data: a field missing');
};
  