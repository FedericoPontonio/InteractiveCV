import data from '../../../assets/data.json'
import './Education.css'
import metaCertificate from '../../../assets/metaCertificate.jpg'

function Education({languageSelected, setModalContent, setModalVisible}) {

    const relevantData = data[languageSelected].education;

    const theOdinProjectContent = () => {
        return (
            <>
                <a href="https://www.theodinproject.com/"><img id='theOdinProjectImg' src="https://www.skillfinder.com.au/media/wysiwyg/the-odin-project-logo-skill-finder-partners-page.png" alt="The Odin Project Image" /></a>
                {languageSelected === 'it' ? <div>
                    <p>Percorso di formazione full-stack seguito in autonomia, con forte orientamento pratico e focus sullo sviluppo web moderno. Il programma si distingue per l’approccio hands-on: ogni concetto appreso viene subito consolidato attraverso progetti reali e concreti, permettendo di costruire competenze solide in:</p>
                    <ul>
                        <li><strong>Frontend development:</strong> HTML5, CSS3, JavaScript moderno (ES6+), responsive design, Web APIs.</li>
                        <li><strong>Framework & librerie:</strong> approfondimento di React, con focus su componenti, state management e hooks.</li>
                        <li><strong>Backend development:</strong> Node.js, Express, REST APIs, gestione di database (PostgreSQL).</li>
                        <li><strong>Versionamento e flusso di lavoro professionale: </strong> utilizzo quotidiano di Git e GitHub, debugging, clean code, gestione di progetti.</li>
                        <li><strong>Problem solving e lettura della documentazione tecnica: </strong> allenamento continuo su come affrontare e risolvere problemi in autonomia, come uno sviluppatore reale.</li>
                        <li><strong>Mentalità full-stack: </strong> capacità di progettare e costruire applicazioni complete, dall’interfaccia utente al backend.</li>
                    </ul>
                </div> :
                <div>
                <p>Self-directed full-stack learning path with a strong practical focus and emphasis on modern web development. The program stands out for its hands-on approach: every concept is immediately reinforced through real, concrete projects, building solid skills in:</p>
                <ul>
                    <li><strong>Frontend development:</strong> HTML5, CSS3, modern JavaScript (ES6+), responsive design, Web APIs.</li>
                    <li><strong>Frameworks & libraries:</strong> in-depth React experience, with a focus on components, state management, and hooks.</li>
                    <li><strong>Backend development:</strong> Node.js, Express, REST APIs, database management (PostgreSQL).</li>
                    <li><strong>Version control and professional workflow:</strong> daily use of Git and GitHub, debugging, clean code, and project management.</li>
                    <li><strong>Problem-solving and technical documentation:</strong> constant practice in tackling and solving challenges independently, like a real-world developer.</li>
                    <li><strong>Full-stack mindset:</strong> ability to design and build complete applications, from user interface to backend logic.</li>
                </ul>
            </div>
            }
            </>
        )
    }

    const setModelContentById = (id)=> {
        if (id === '1') {return (
        <>
            <p><a href="https://www.coursera.org/verify/professional-cert/739U2ZE7P7YR">{relevantData[1].description}</a></p>
            <img id='metaCertificateImg' src={metaCertificate} alt="meta certificate" />
        </>)}
        if (id === '2') {return (
        <>
            <div className='the-odin-project'>{theOdinProjectContent()}</div>
        </>)}
        

    }

    const educationSectionToRender = () => {
            const result = relevantData.map((education) => {
                return (
                    <div 
                        className={`experienceInstance ${education.id === '1' && 'interactableItem' || education.id === '2' ? 'interactableItem' : ''}`}
                        key={education.id}
                        onClick={
                            (education.id === '1' || education.id === '2') 
                                ? () => { setModalVisible(true); setModalContent(setModelContentById(education.id)); }
                                : undefined
                        }
                        >
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
                <h2 className='leftColumnsHeader'>{languageSelected === 'it' ? 'Formazione' : 'Education'}</h2>
                {
                    result
                }
            </div>
        )
    }

    return(
        <>
            {
                educationSectionToRender(relevantData)
            }
        </>
    )
}

export default Education