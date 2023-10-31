import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const [user, setUser] = useState(users);
  const [message, setMessage] = useState(null);

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        const updatedUser = user.filter((item) => item._id !== id);
        setUser(updatedUser);
        setMessage("User is removed");

        // Clear the message after a delay (e.g., 3 seconds)
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {users.length}
      {user.map((item) => {
        return (
          <div className="flex gap-x-4 gap-y-4" key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <Link to={`/update/${item._id}`}>Update</Link>
            <button onClick={() => deleteItem(item._id)}>X </button>
          </div>
        );
      })}
      {message && <div>{message}</div>}
    </div>
  );
};

export default Users;
