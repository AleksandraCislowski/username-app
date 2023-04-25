import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import "./Form.css";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function Error() {
    if (enteredName.length === 0 || enteredAge.length === 0) {
      setModalIsOpen(true);
    } else setModalIsOpen(false);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    props.addUser(userData);
    setEnteredName("");
    setEnteredAge("");
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
          min='0'
          max='99'
          step='1'
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <button className='button' type='submit' onClick={Error}>
          Add User
        </button>
      </div>
      {modalIsOpen && <Modal closeModal={closeModal} />}
      {modalIsOpen && <Backdrop closeModal={closeModal} />}
    </form>
  );
};

export default Form;
