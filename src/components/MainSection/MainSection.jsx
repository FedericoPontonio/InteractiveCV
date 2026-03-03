import Education from './Education/Education'
import './MainSection.css'
import WorkExperiences from './WorkExperiences/WorkExperiences'

function MainSection({languageSelected, data, setModalContent, setModalVisible, staticView}) {
    const footerAuthorization = function () {
        const result = languageSelected === 'it' ? data.it.privacy_consent : data.en.privacy_consent;
        return result
    }

    console.log('Is static view selected?' + (staticView ? ' YES' : ' NO'))

    return (
        <div className='MainSection'>
            <WorkExperiences languageSelected = {languageSelected}  setModalContent ={setModalContent} setModalVisible = {setModalVisible}  />
            <Education languageSelected = {languageSelected}  setModalContent ={setModalContent} setModalVisible = {setModalVisible} staticView={staticView} />
            <div className='footerAuthorization'>{footerAuthorization()}</div>
        </div>
    )
}
export default MainSection