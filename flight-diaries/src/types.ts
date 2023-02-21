export interface DiaryEntry {
    id: string,
    date: string,
    weather: string,
    visibility: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;