import axios from "axios"
import { DiaryEntry, NewDiaryEntry } from "../types"
const baseURL = 'api/diaries'


export const getDiaryEntries = () => {
    return axios
        .get<DiaryEntry[]>(baseURL)
        .then(response => response.data)
}

export const createDiary = (newDiaryEntry: NewDiaryEntry): Promise<DiaryEntry> => {
    return axios
      .post<NewDiaryEntry>(baseURL, newDiaryEntry)
      .then(response => {
        const { id, ...entry } = response.data as DiaryEntry;
        return {
          ...entry,
          id: id.toString()
        } as DiaryEntry;
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }