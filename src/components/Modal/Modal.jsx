import './Modal.css'
function Modal ({modalContent, modalVisible, setModalVisible}) {


    const closeModal = (event)=>{
        const modalBackground = document.querySelector('.modalBackground');
        event.target === modalBackground && setModalVisible(false)
    }

    return (
        <div onClick={closeModal} className={`modalBackground ${!modalVisible && 'modalInvisible'}`}>
            <div className='modalContent'>
                {modalContent}
            </div>
        </div>
    )
}

export default Modal