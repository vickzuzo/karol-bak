const siteReducerDefaultState = {
  loading: false,
  error: "",
  success: "",
  theme: undefined,
  instagram: "",
  facebook: "",
  twitter: "",
  email: "",
  carousels: [],
};

const siteReducer = (state = siteReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_SUCCESS":
      return { ...state, success: action.success };

    case "SET_ERROR":
      return { ...state, error: action.error };

    case "START_LOADING":
      return { ...state, loading: true };

    case "STOP_LOADING":
      return { ...state, loading: false };

    case "UPDATE_SITE":
      return { ...state, ...action.update };

    case "SET_THEME":
      return { ...state, theme: action.theme };

    default:
      return state;
  }
};

export default siteReducer;
