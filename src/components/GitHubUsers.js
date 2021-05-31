import React from "react";
import "../css/GitHubUsers.css";
import { FaGithub } from "react-icons/fa";
const GitHubUsers = ({ users, removeUser, id }) => {
  return (
    <div className="flex-row-container">
      {users.map((user) => {
        return (
          <div className="flex-row-item" key={user.id}>
            <img src={user.avatar_url} alt=""></img>
            <p>{user.login}</p>
            <a href={user.html_url} target="_blank">
              <FaGithub size="30px" />
            </a>
            <div>
              <button className="btn" onClick={() => removeUser(user.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GitHubUsers;
