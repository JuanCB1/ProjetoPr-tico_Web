import { useState } from 'react'
import Profile from './componentes/profile'
import Experiencia from './componentes/Experiencia'
import Languages from './componentes/Linguas'
import Education from './componentes/Educacao'
import Social from './componentes/social'
import Contact from './componentes/contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="left">
        <Profile></Profile>
        <Experiencia></Experiencia>
      </div>
      <div className="right">
        <Languages></Languages>
        <Education></Education>
        <Social></Social>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
