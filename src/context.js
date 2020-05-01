import React from 'react';

const UsersContext = React.createContext({
  users: [
    {id: 1, firstName: "Matti", lastName: "Virtanen"},
    {id: 2, firstName: "Maija", lastName: "Meikäläinen"}
  ]
})

export default UsersContext;