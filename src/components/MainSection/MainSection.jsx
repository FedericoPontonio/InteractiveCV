import Education from './Education/Education'
import './MainSection.css'
import WorkExperiences from './WorkExperiences/WorkExperiences'

function MainSection({lenguageSelected, data, setModalContent, setModalVisible}) {
    const footerAuthorization = function () {
        const result = lenguageSelected === 'it' ? data.it.privacy_consent : data.en.privacy_consent;
        return result
    }

    return (
        <div className='MainSection'>
            <Education lenguageSelected = {lenguageSelected}  setModalContent ={setModalContent} setModalVisible = {setModalVisible}  />
            <WorkExperiences lenguageSelected = {lenguageSelected}  setModalContent ={setModalContent} setModalVisible = {setModalVisible}  />
            <div className='footerAuthorization'>{footerAuthorization()}</div>
        </div>
    )
}
export default MainSection