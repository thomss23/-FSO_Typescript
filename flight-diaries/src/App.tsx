import { useEffect, useState } from "react"
import { getDiaryEntries } from "./components/diaryService"
import { DiaryEntry, NewDiaryEntry } from "./types"


const App = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([])
  const [newDiaryEntry, setNewDiaryEntry] = useState<NewDiaryEntry | null>(null);

  useEffect(() => {
    getDiaryEntries().then(data => {
      setDiaryEntries(data)
    })
  }, [])

  return (
    <div>
      <h1>Diary Entries</h1>

      {diaryEntries.map(entry => {
        return(
          <div key={entry.id}>
              <h2>{entry.date}</h2>
              <div> visibility : {entry.visibility}</div>
              <div> weather : {entry.weather}</div>
              <br></br>
          </div>
        ) 
      })}
    </div>


  );
}

export default App;
