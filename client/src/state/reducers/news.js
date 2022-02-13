const newsReducerDefaultState = [];

const newsReducer = (state = newsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEWS":
      return action.data;

    default:
      return state;
  }
};

export default newsReducer;
