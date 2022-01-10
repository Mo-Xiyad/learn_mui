import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import leftBarReducer from "./reducers/leftbar";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import restaurantReducer from "./reducers/restaurant";

const workingMiddleware =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  leftSideBar: {
    open: false,
  },
  restaurant: {
    tables: [],
    name: "",
  },
};

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_STORE_ENCRYPT_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  leftSideBar: leftBarReducer,
  restaurant: restaurantReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  workingMiddleware(applyMiddleware(thunk))
);

export default configureStore;
export const persister = persistStore(configureStore);
