import "./UserList.css";

const UserList = (props) => {
  return (
    <div className='list-item'>
      {props.users?.map((user) => (
        <div key={user.name}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
