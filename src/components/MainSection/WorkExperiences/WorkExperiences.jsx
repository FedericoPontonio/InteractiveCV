import data from '../../../assets/data.json'

function WorkExperiences({lenguageSelected}) {

    const relevantDataIt = data.it.experience;
    const relevantDataEn = data.en.experience;

    const workExpSectionToRender = function(relevantData) {
            const result = relevantData.map((workExp, index) => {
                return (
                    <div className='experienceInstance' key={index}>
                        <div>{workExp.date}</div>
                        <h4 className='experienceTitle'>{workExp.role}</h4>
                        <div>{workExp.company}</div>
                        {/* <div>{education.description}</div> */}
                    </div>
                )
            }
        )
        return (
            <div className="mainSectionParagraph">
                <h2 className='leftColumnsHeader'>{lenguageSelected === 'it' ? 'Esperienze Lavorative' : 'Work Experiences'}</h2>
                {
                    result
                }
            </div>
        )
    }

    return(
        <>
            {
                lenguageSelected === 'it' ? workExpSectionToRender(relevantDataIt) : workExpSectionToRender(relevantDataEn)
            }
        </>
    )
}

export default WorkExperiences