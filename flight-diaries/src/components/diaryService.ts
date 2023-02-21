import axios from "axios"
import { DiaryEntry } from "../types"
const baseURL = 'api/diaries'


export const getDiaryEntries = () => {
    return axios
        .get<DiaryEntry[]>(baseURL)
        .then(response => response.data)
}