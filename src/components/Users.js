import { useState, useEffect } from 'react';
import { Card } from "react-bootstrap"

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    return fetch("https://changeable-pumped-coin.glitch.me/users").
		then((res) => res.json());
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
      return( 
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Username: {user.username}</Card.Title>
          <Card.Text>Created At: {user.created}</Card.Text>
        </Card.Body>
      </Card>
          )
        }
       )
      }
    </div>
  )
}

export default Users;