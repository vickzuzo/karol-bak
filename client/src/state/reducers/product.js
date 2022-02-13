const productReducerDefaultState = [];

const productReducer = (state = productReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return action.data;

    default:
      return state;
  }
};

export default productReducer;
