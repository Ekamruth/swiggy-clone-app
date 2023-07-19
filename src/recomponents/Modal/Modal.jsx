import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'
import {TfiClose} from 'react-icons/tfi'

const Modal = (props) => {
  return createPortal(
    <>
    <div className='overlay'></div>
      <div className='modal'>
        <div className='modal_close_btn'>
          <TfiClose  onClick={props.closeModal}>close</TfiClose>
        </div>
        {props.children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
