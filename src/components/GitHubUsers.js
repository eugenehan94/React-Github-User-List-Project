import React from "react";

const GitHubUsers = ({ users }) => {
  return (
    <div>
      <h2>GitHub Users</h2>
      {users.map((user) => {
        return (
          <div>
            <img src={user.avatar_url} alt=""></img>
          </div>
        );
      })}
    </div>
  );
};

export default GitHubUsers;
