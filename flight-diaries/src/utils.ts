
import { NewDiaryEntry, Weather, Visibility } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: unknown, setError: (message: string) => void): string => {
    if (!isString(comment)) {
      setError('Incorrect or missing comment');
      throw new Error('Incorrect or missing comment');
    }
  
    return comment;
};
  

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown, setError: (message: string) => void): string => {
    if (!isString(date) || !isDate(date)) {
        setError('Incorrect date: ' + date)
        throw new Error('Incorrect date: ' + date);
    }
    return date;
};
  

const isWeather = (param: string): param is Weather => {
  return Object.values(Weather).map(v => v.toString()).includes(param);
};

const parseWeather = (weather: unknown, setError: React.Dispatch<React.SetStateAction<string>>): Weather => {
    if (!isString(weather) || !isWeather(weather)) {
      setError('Incorrect weather: ' + weather);
      throw new Error('Incorrect weather: ' + weather);
    }
    return weather;
  };

const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility).map(v => v.toString()).includes(param);
};

const parseVisibility = (visibility: unknown, setError: React.Dispatch<React.SetStateAction<string>>): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
      setError('Incorrect visibility: ' + visibility)
      throw new Error('Incorrect visibility: ' + visibility);
  }
  return visibility;
};

const toNewDiaryEntry = (object: unknown, setError : React.Dispatch<React.SetStateAction<string>>): NewDiaryEntry => {
  if ( !object || typeof object !== 'object' ) {
    throw new Error('Incorrect or missing data');
  }

  if ('comment' in object && 'date' in object && 'weather' in object && 'visibility' in object)  {
    const newEntry: NewDiaryEntry = {
      weather: parseWeather(object.weather, setError),
      visibility: parseVisibility(object.visibility, setError),
      date: parseDate(object.date, setError),
      comment: parseComment(object.comment, setError)
    };
  
    return newEntry;
  }

  throw new Error('Incorrect data: a field missing');
};

export default toNewDiaryEntry;