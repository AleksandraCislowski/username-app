import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./Form.css";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState("");

  function closeModal() {
    setModalIsOpen(false);
    setError("");
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError("Please enter a valid name and age (non-empty values)");
      setModalIsOpen(true);
    } else {
      if (+enteredAge <= 0) {
        setError("Please enter a valid age (> 0)");
        setModalIsOpen(true);
      } else {
        const userData = {
          name: enteredName,
          age: enteredAge,
        };
        props.addUser(userData);
        setEnteredName("");
        setEnteredAge("");
      }
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='form'>
        <label>Username</label>
        <input
          type='text'
          value={enteredName}
          onChange={nameChangeHandler}
        ></input>
        <label>Age (Years)</label>
        <input
          type='number'
          step='1'
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
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
