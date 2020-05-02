import React, { useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import UsersContext from './context';
import usersReducer from './reducer';
import UsersList from './components/UsersList';
import NewUserForm from './components/NewUserForm';

const App = () => {

  const initialState = useContext(UsersContext);
  const [state, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    const result = await axios.get('/users', {
      params: {
        limit: 1000
      }
    });
    console.log("RESULT.DATA: ", result.data.data);
    dispatch({ type: "GET_USERS", payload: result.data.data });
  }


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
