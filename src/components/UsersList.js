import React, { useContext } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import UsersContext from '../context';

const UsersList = () => {

  const { state, dispatch } = useContext(UsersContext);

  console.log("STATE IN USERS LIST: ", state)

  return (
    <ListGroup>
      {state.users.sort((a, b) => {
        if (a.firstName > b.firstName) {
          return 1;
        } else if (a.firstName < b.firstName) {
          return -1;
        } else if (a.lastName > b.lastName) {
          return 1;
        } else if (a.lastName < b.lastName) {
          return -1
        } else {
          return 0;
        }
      }).map(user => {
        return (
          <ListGroupItem key={user.id}>
            <section style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, margin: "auto 0" }}>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button outline color="danger" onClick={() => dispatch({ type: "DELETE_USER", payload: user })}>
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        )
      })}

    </ListGroup>
  )
}

export default UsersList;
