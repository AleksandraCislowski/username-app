import "./Modal.css";

function Modal({ closeModal, error }) {
  return (
    <div className='modal'>
      <p>{error}</p>
      <button onClick={closeModal}>Okay</button>
    </div>
  );
}
export default Modal;
