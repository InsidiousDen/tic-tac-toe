import React from "react";
import Form from "./Form/Form";
import './Modal.css'
import { xPlayer, oPlayer } from "../../constants/values";

const Modal = ({ active, setActive, handleXName, handleOName }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'content active' : 'modal'} onClick={(e) => e.stopPropagation()}>
        <Form
          onChange={handleXName}
          placeholder={xPlayer}
        ></Form>
        <Form
          onChange={handleOName}
          placeholder={oPlayer}
        ></Form>
        <button className={'button'} onClick={() => setActive(false)}>Change Name</button>
      </div>
    </div>
  );
}

export default Modal