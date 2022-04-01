import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import tasksReducer from './reducers/tasksReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

const rootReducer = combineReducers({ 
  tasksReducer: persistReducer(persistConfig, tasksReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);