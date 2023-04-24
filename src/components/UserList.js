import "./UserList.css";

const UserList = (props) => {
  return (
    <div className='user-list'>
      {props.users?.map((user) => (
        <div className='list-item' key={user.name}>
          {user.name} ({user.age} years old)
        </div>
      ))}
    </div>
  );
};

export default UserList;
