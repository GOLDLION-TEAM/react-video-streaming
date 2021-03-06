import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const middleware = [thunk];
const initState = {};
const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(...middleware),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
? a => a
: window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;