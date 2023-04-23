import "./Form.css";

const Form = () => {
  return (
    <div className='form'>
      <label>Username</label>
      <input type='text'></input>
      <label>Age (Years)</label>
      <input type='number'></input>
      <button>Add User</button>
    </div>
  );
};
export default Form;
