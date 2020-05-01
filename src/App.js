import React, { useContext, useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import UsersContext from './context';
import usersReducer from './reducer';
import UsersList from './components/UsersList';
import NewUserForm from './components/NewUserForm';

const App = () => {

  const initialState = useContext(UsersContext);
  const [state, dispatch] = useReducer(usersReducer, initialState);

  console.log("INITIAL STATE: ", initialState)

  const allUsers = initialState;

  // useEffect(() => {
  //   dispatch({ type: "GET_USERS", payload: allUsers })
  // }, [allUsers])

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
        <NewUserForm />
        <UsersList />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
