import React, { useContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import UsersContext from './context';
import usersReducer from './reducer';

import UsersList from './components/UsersList';

const App = () => {

  const initialState = useContext(UsersContext);
  const [state, dispatch] = useReducer(usersReducer, initialState);

  console.log(initialState)

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      <UsersList />
    </UsersContext.Provider>
  );
}

export default App;
