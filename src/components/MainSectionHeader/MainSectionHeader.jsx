import './MainSectionHeader.css'
import clickIcon from '../../assets/clickIcon.svg'

function mainSectionHeader (props) {

    function handleChangeLenguage(lenguageSelected) {
        lenguageSelected === 'it' ? props.changeLenguage('en') : props.changeLenguage('it');
    }


    return(
        <div className='mainSectionHeader'>
            <div className='mainSectionHeaderContent'>
                <h1>Federico Pontonio</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
            <div className='buttonWrapper'>
                <img id='clickIcon' src={clickIcon} alt="click icon" />
                <button id='changeLenguageButton' className={props.lenguageSelected === 'it' ? 'itaBackground' : 'ukBackground'}  onClick={()=> handleChangeLenguage(props.lenguageSelected)}></button>
            </div>
        </div>
    )
}


export default mainSectionHeader
