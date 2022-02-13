const galleryReducerDefaultState = [];

const galleryReducer = (state = galleryReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_GALLERY":
      return action.data;

    default:
      return state;
  }
};

export default galleryReducer;
