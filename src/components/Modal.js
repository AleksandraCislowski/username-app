import "./Modal.css";

function Modal({ closeModal, error }) {
  return (
    <div className='modal'>
      <h2>Invalid input</h2>
      <p>{error}</p>
      <button onClick={closeModal}>Okay</button>
    </div>
  );
}
export default Modal;
