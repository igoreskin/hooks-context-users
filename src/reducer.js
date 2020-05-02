export default function reducer(state, action) {
  switch (action.type) {

    case "GET_USERS": 
    console.log(action.payload)
      return { ...state, users: action.payload }

    case "CREATE_USER":
      const addedUsers = [ ...state.users, action.payload ];
      return { ...state, users: addedUsers }

    case "DELETE_USER":
      const filteredUsers = state.users.filter(user => user.id !== action.payload.id);
      return { ...state, users: filteredUsers }

    default: 
      return state;
  }
}