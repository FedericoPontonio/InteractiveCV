import './LeftColumn.css'
import addressSVG from '../../assets/address.svg'
import phoneSVG from '../../assets/phone.svg'
import emailSVG from '../../assets/email.svg'
import githubSVG from '../../assets/github.svg'
import linkedinSVG from '../../assets/linkedin.svg'

import jsSVG from '../../assets/js.svg'
import reactSVG from '../../assets/react.svg'
import htmlSVG from '../../assets/html.svg'
import cssSVG from '../../assets/css.svg'
import nodeSVG from '../../assets/node.svg'
import gitSVG from '../../assets/git.svg'
import sqlSVG from '../../assets/sql.svg'

import itaSVG from '../../assets/ita.svg'
import ukSVG from '../../assets/uk.svg'
import esSVG from '../../assets/es.svg'
import englishBadge from '../../assets/englishBadge.png'

import data from '../../assets/data.json'


function LeftColumn({languageSelected, setModalContent, setModalVisible, staticView}) {


    const contactSection = function () {
        const relevantData = data.it.contact

        return (
            <>
                <h2 className='leftColumnsHeader'>{languageSelected === 'it' ? 'Contatti' : 'Contacts'}</h2>
                <ul>
                    <li><img src={addressSVG} alt="Address Icon" /> <p>{relevantData.address}</p></li>
                    <li><img src={phoneSVG} alt="phone Icon" /> <p>{relevantData.phone}</p></li>
                    <li><img src={emailSVG} alt="email Icon" /><p>{relevantData.email}</p></li>
                    <li><img src={githubSVG} alt="github Icon" /><a href={relevantData.github}>{staticView ? relevantData.github : 'Github'}</a></li>
                    <li><img src={linkedinSVG} alt="linkedin Icon" /><a href={relevantData.linkedin}>{staticView ? relevantData.linkedin : 'Linkedin'}</a></li>
                </ul>
            </>

        )
    }

    const skillsSection = function () {
        return (
            <>
                <h2 className='leftColumnsHeader'>{languageSelected === 'it' ? 'Competenze' : 'Skills'}</h2>
                <ul>
                    <li><img src={htmlSVG} alt="html icon" /><p>HTML</p></li>
                    <li><img src={cssSVG} alt="css icon" /><p>CSS</p></li>
                    <li><img src={jsSVG} alt="js icon" /><p>JavaScript</p></li>
                    <li><img id='reactIcon' src={reactSVG} alt="react icon" /><p>React</p></li>
                    <li><img src={nodeSVG} alt="node icon" /><p>Node.js</p></li>
                    <li><img src={gitSVG} alt="git icon" /><p>Git</p></li>
                    <li><img id='sqlIcon' src={sqlSVG} alt="sql icon" /><p>SQL</p></li>
                </ul>
            </>
        )    

    }

    const languagesSection = function () {
        const itaData = data.it.languages;
        const engData = data.en.languages;

        const modalEnglishLanguage = ()=> {
            return (<div>
                <img src={englishBadge} alt="english badge" />
            </div>)
        }

        const italianVersion = ()=>
            <ul>
                <li><img src={itaSVG} alt="bandiera italiana" /><p>{itaData[0].language} - {itaData[0].level}</p></li>
                <li className='interactableItem' onClick={()=>{setModalContent(modalEnglishLanguage); setModalVisible(true)}}><img  src={ukSVG} alt="bandiera inglese" /><p>{itaData[1].language} - {itaData[1].level}</p></li>
                <li><img src={esSVG} alt="bandiera spagnola" /><p>{itaData[2].language} - {itaData[2].level}</p></li>
            </ul>;
        const englishVersion = ()=>
            <ul>
                <li><img src={itaSVG} alt="italian flag" /><p>{engData[0].language} - {engData[0].level}</p></li>
                <li  className='interactableItem' onClick={()=>{setModalContent(modalEnglishLanguage); setModalVisible(true)}}><img src={ukSVG} alt="UK flag" /><p>{engData[1].language} - {engData[1].level}</p></li>
                <li><img src={esSVG} alt="spanish flag" /><p>{engData[2].language} - {engData[2].level}</p></li>
            </ul>

        return(
            <>
                <h2 className='leftColumnsHeader'>{languageSelected === 'it' ? 'Lingue' : 'Languages'}</h2>
                {languageSelected === 'it' ? italianVersion() : englishVersion()}
            </>
        )
    }

    return(
        <div className="LeftColumn">
            {contactSection()}
            {skillsSection()}
            {languagesSection()}
        </div>
    )
}

export default LeftColumn