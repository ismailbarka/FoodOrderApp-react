import classes from './Modal.module.css'
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
const Backdrop = (props) =>{
    return(
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )
}

const ModalOverlay = (props) =>{
    return(
        <div className={classes.modal}>
            <div className={classes.content} onClick={props.onClose}>{props.children} </div>
        </div>
    );
}

const PortalElement = document.getElementById('Overlays');

const Modal = (props) =>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, PortalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
        </Fragment>
    )
};

export default Modal;