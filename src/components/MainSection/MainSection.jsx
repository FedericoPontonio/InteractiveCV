import Education from './Education/Education'
import './MainSection.css'
import WorkExperiences from './WorkExperiences/WorkExperiences'

function MainSection({languageSelected, data, setModalContent, setModalVisible}) {
    const footerAuthorization = function () {
        const result = languageSelected === 'it' ? data.it.privacy_consent : data.en.privacy_consent;
        return result
    }

    return (
        <div className='MainSection'>
            <Education languageSelected = {languageSelected}  setModalContent ={setModalContent} setModalVisible = {setModalVisible}  />
            <WorkExperiences languageSelected = {languageSelected}  setModalContent ={setModalContent} setModalVisible = {setModalVisible}  />
            <div className='footerAuthorization'>{footerAuthorization()}</div>
        </div>
    )
}
export default MainSection