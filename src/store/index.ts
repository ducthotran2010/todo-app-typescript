import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: storage
};
const persist = persistReducer(persistConfig, rootReducer);

export const store = createStore(persist);
export const persistor = persistStore(store);
