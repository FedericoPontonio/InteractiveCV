import data from '../../../assets/data.json'
import metaCertificate from '../../../assets/metaCertificate.pdf'

function Education({lenguageSelected, setModalContent, setModalViaible}) {

    const relevantDataIt = data.it.education;
    const relevantDataEn = data.en.education;


    const educationSectionToRender = function(relevantData) {
            const result = relevantData.map((education, index) => {
                return (
                    <div className='experienceInstance' key={index}>
                        <div>{education.date}</div>
                        <h4 className='experienceTitle'>{education.title}</h4>
                        <div>{education.subtitle}</div>
                        {/* <div>{education.description}</div> */}
                    </div>
                )
            }
        )
        return (
            <div className="mainSectionParagraph">
                <h2 className='leftColumnsHeader'>{lenguageSelected === 'it' ? 'Formazione' : 'Education'}</h2>
                {
                    result
                }
            </div>
        )
    }

    return(
        <>
            {
                lenguageSelected === 'it' ? educationSectionToRender(relevantDataIt) : educationSectionToRender(relevantDataEn)
            }
        </>
    )
}

export default Education