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
  const [staticView, setStaticView] = useState(false);

  return (
    <div className='rootComponent'>
      <div className='imageSection' ><img src={image} alt='image'/></div>
      <MainSectionHeader changeLanguage = {setLanguage} languageSelected = {language} setStaticView = {setStaticView} staticView={staticView} />
      <LeftColumn languageSelected = {language} setModalContent ={setModalContent} setModalVisible = {setModalVisible} staticView={staticView} />
      <MainSection languageSelected = {language} data ={data}  setModalContent ={setModalContent} setModalVisible = {setModalVisible} staticView={staticView} />
      <Modal modalContent={modalContent} modalVisible = {modalVisible} setModalVisible = {setModalVisible} />
    </div>
  )
}

export default App
