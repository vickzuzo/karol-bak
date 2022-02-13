import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import newsReducer from "../reducers/news";
import productReducer from "../reducers/product";
import siteReducer from "../reducers/site";
import userReducer from "../reducers/user";
import galleryReducer from "../reducers/gallery";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("Karol-Bak", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("Karol-Bak");
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const configureStore = () => {
  // STORE CREATION (with multiple reducers)

  const store = createStore(
    combineReducers({
      site: siteReducer,
      user: userReducer,
      product: productReducer,
      news: newsReducer,
      gallery: galleryReducer,
    }),
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => saveToLocalStorage(store.getState()));

  return store;
};

// thunk allows redux to dispatch functions
export default configureStore;
