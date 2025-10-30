import './App.css'
import MeliMelo from './component/MeliMelo'
import digimonList from './data/data.tsx'

function App() {
  return (
    <>
      <div>
        <a href="https://fr.wikipedia.org/wiki/Digimon" target="_blank">
          <img src="/src/data/image/digimontitle.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <h1 style={{color : "#1971c2", fontFamily: "Zen Dots"}}>MEMORY CARD GAME</h1>
        <MeliMelo digimon={digimonList}/>
      </div>
    </>
  )
}

export default App
