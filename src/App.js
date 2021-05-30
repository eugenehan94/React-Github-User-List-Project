import React from "react";
import { useState, useEffect } from "react";

import Loading from "./components/Loading";
import GitHubUsers from "./components/GitHubUsers";

const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
      setLoading(false);
      console.log(users);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const removeUser = (id) => {
    let newList = users.filter((user) => user.id !== user);
    setUsers(newList);
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h1>GitHub Users List</h1>
      <GitHubUsers users={users} />
    </div>
  );
}

export default App;
