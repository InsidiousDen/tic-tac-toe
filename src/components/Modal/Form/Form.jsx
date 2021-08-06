import React from "react";
import styles from './Form.module.css'

const Form = ({ onChange, placeholder }) => {
  return (
    <form className={styles.root} >
      <input className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </form>
  );
}

export default Form