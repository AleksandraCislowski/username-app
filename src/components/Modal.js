import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className='modal'>
      <p>Please enter a valid name and age (non-empty values)</p>
      <button onClick={closeModal}>Okay</button>
    </div>
  );
}
export default Modal;
