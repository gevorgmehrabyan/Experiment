import {createStore} from 'redux';
import {combineReducers} from "redux";
import {createBrowserHistory} from 'history';
import rootReducer from "./rootReducer";


const store = createStore(
    combineReducers({
        ...rootReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

const history = createBrowserHistory();
export {store, history};
