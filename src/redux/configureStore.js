import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Auth from "./reducers/Auth";

const combineReducer = combineReducers({
        Auth: Auth
})

const persistConfig = {
    key: 'root',
    storage: storage,
    version: 0,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };

   const persistedReducer = persistReducer(persistConfig, combineReducer)
   export const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
  export const persistor = persistStore(store)