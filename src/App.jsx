import { useState } from 'react'
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent'
import { MainComponent } from './components/MainComponent/MainComponent'
import { FooterComponent } from './components/FooterComponent/FooterComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  )
}

export default App
