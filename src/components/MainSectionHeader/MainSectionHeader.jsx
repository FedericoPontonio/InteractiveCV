import './MainSectionHeader.css'
import clickIcon from '../../assets/clickIcon.svg'
import { useState } from 'react';

function mainSectionHeader (props) {

    function handleChangeLanguage(languageSelected) {
        languageSelected === 'it' ? props.changeLanguage('en') : props.changeLanguage('it');
    }
    return(
        <div className='mainSectionHeader'>
            <div className='mainSectionHeaderContent'>
                <h1>Federico Pontonio</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
            <div className='buttonWrapper'>
                <img id='clickIcon' src={clickIcon} alt="click icon" />
                <button id='changeLanguageButton' className={props.languageSelected === 'it' ? 'itaBackground' : 'ukBackground'}  onClick={()=> handleChangeLanguage(props.languageSelected)}></button>
                <p></p>
                <button onClick={()=>props.setStaticView(!props.staticView)} id='switchViewModeButton'><div className={props.staticView ? 'sliderSelected' : 'sliderUnselected'} id='buttonSphere'></div></button>
            </div>
        </div>
    )
}


export default mainSectionHeader
