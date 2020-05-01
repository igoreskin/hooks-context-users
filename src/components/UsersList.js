import React, { useContext } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import axios from 'axios';
import UsersContext from '../context';

const UsersList = () => {

  const { state, dispatch } = useContext(UsersContext);

  console.log("STATE: ", state)

  return (
    <div>
      
    </div>
  )
}

export default UsersList;
