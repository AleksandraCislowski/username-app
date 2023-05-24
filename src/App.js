import React, { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";
import Wrapper from "./components/Wrapper";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  return (
    <Wrapper>
      <div className='app'>
        <Form addUser={addUser} />
        {users.length > 0 && <UserList users={users} />}
      </div>
    </Wrapper>
  );
}

export default App;
