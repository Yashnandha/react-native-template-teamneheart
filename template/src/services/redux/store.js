import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootSaga from './rootSaga.js';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default { store, persistor };
