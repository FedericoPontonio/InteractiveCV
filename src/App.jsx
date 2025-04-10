import { useState } from 'react'
import './App.css'
import data from './assets/data.json'
import image from './assets/imgLinkedin.jpg'
import MainSectionHeader from './components/MainSectionHeader/MainSectionHeader'
import LeftColumn from './components/LeftColumn/LeftColumn'
import MainSection from './components/MainSection/MainSection'
function App() {

  const [lenguage, setLenguage] = useState('it')

  return (
    <div className='rootComponent'>
      <div>hello</div>
      <div className='imageSection' ><img src={image} alt='image'/></div>
      <MainSectionHeader changeLenguage = {setLenguage} lenguageSelected = {lenguage} />
      <LeftColumn lenguageSelected = {lenguage} />
      <MainSection lenguageSelected = {lenguage} data ={data} />
    </div>
  )
}

export default App
