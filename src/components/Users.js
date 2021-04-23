import { useState, useEffect } from 'react';


function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    return fetch("http://localhost:4000/users").then((res) => res.json());
  };
  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data.users)
      })
  }, [])

  return (
    <div>
      <h1>Users List</h1>

      {
        users.map((user) => {
          return( <ul>
            <li key={user.id}>
								Username: {user.username}
            	<br/>
                Created At: {user.created}
            </li>
        </ul>
          )
        })
      }
    </div>
  )
}

export default Users;