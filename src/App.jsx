import { useState } from 'react'
import './App.css'
import data from './assets/data.json'
import image from './assets/imgLinkedin.jpg'
import MainSectionHeader from './components/MainSectionHeader/MainSectionHeader'
import LeftColumn from './components/LeftColumn/LeftColumn'
import MainSection from './components/MainSection/MainSection'
import Modal from './components/Modal/Modal'
function App() {

  const [language, setLanguage] = useState('it');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState();

  return (
    <div className='rootComponent'>
      <div className='imageSection' ><img src={image} alt='image'/></div>
      <MainSectionHeader changeLanguage = {setLanguage} languageSelected = {language} />
      <LeftColumn languageSelected = {language} setModalContent ={setModalContent} setModalVisible = {setModalVisible} />
      <MainSection languageSelected = {language} data ={data}  setModalContent ={setModalContent} setModalVisible = {setModalVisible} />
      <Modal modalContent={modalContent} modalVisible = {modalVisible} setModalVisible = {setModalVisible} />
    </div>
  )
}

export default App
