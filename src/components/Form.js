import React, { useState, useRef } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./Form.css";

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState("");

  function closeModal() {
    setModalIsOpen(false);
    setError("");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError("Please enter a valid name and age (non-empty values)");
      setModalIsOpen(true);
    } else {
      if (+enteredUserAge <= 0) {
        setError("Please enter a valid age (> 0)");
        setModalIsOpen(true);
      } else {
        const userData = {
          name: enteredUserName,
          age: enteredUserAge,
        };
        props.addUser(userData);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
      }
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='form'>
        <label>Username</label>
        <input type='text' ref={nameInputRef}></input>
        <label>Age (Years)</label>
        <input type='number' step='1' ref={ageInputRef}></input>
        <button className='button' type='submit'>
          Add User
        </button>
      </div>
      {modalIsOpen && <Modal closeModal={closeModal} error={error} />}
      {modalIsOpen && <Backdrop closeModal={closeModal} />}
    </form>
  );
};

export default Form;
