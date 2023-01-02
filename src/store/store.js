import { createStore, applyMiddleware } from 'redux';
import RootReducers from './reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducers);

export let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export let persistor = persistStore(store);
// export default () => {
//   let store = createStore(
//     persistedReducer,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// let store = createStore(
//   RootReducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
