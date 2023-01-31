
import styles from './Modal.module.css';
import React from "react";


const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onHideCard}></div>
    )
}

const ModalWindow = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}

//const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
    <React.Fragment>
        <Backdrop onHideCard={props.onHideCard}/>
        <ModalWindow>{props.children}</ModalWindow>
    </React.Fragment>

    )
}

export default Modal;