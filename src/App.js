import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  return (
    <div className='app'>
      <Form addUser={addUser} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
