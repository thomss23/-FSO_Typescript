import { useEffect, useState } from "react"
import { createDiary, getDiaryEntries } from "./components/diaryService"
import { DiaryEntry } from "./types"
import toNewDiaryEntry from "./utils"


const App = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([])
  const [date, setDate] = useState<string>('');
  const [visibility, setVisibility] = useState<string >('');
  const [weather, setWeather] = useState<string >('');
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string>('');



  useEffect(() => {
    getDiaryEntries().then(data => {
      setDiaryEntries(data)
    })
  }, [])

  const createDiaryEntry = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const newDiaryEntry = toNewDiaryEntry({date, visibility, comment, weather}, setError)
    createDiary(newDiaryEntry).then(data => {
      setDiaryEntries(diaryEntries.concat(data))
    })

    setComment('');
    setVisibility('');
    setDate('');
    setWeather('');
  };
  return (
    <div>
      <h1>{error}</h1>
      <form onSubmit={createDiaryEntry}>
        date:<input
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        visibility: <input
          value={visibility}
          onChange={(event) => setVisibility(event.target.value)}
        />
        weather: <input
          value={weather}
          onChange={(event) => setWeather(event.target.value)}
        />
        comment: <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type='submit'>add</button>
      </form>
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
