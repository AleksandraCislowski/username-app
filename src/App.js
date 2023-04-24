import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  return (
    <div>
      <Form addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
