import "./Form.css";

const Form = () => {
  return (
    <div className='form'>
      <label>Username</label>
      <input type='text' value='Anna'></input>
      <label>Age (Years)</label>
      <input type='number' min='0' max='99' step='1' value='32'></input>
      <button className='button' type='submit'>
        Add User
      </button>
    </div>
  );
};
export default Form;
