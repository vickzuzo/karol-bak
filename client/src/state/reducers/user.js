const userReducerDefaultState = {
  email: "",
  _id: "",
  token: "",
};

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.data };
    case "LOGOUT":
      return userReducerDefaultState;

    default:
      return state;
  }
};

export default userReducer;
