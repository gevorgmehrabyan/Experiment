import React from 'react';
//styles
import './App.css';
//components
import {Provider} from 'react-redux';
import {store, history} from './redux/store';
import RouterApp from "./RouterApp";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <RouterApp history={history}/>
            <Footer/>
        </Provider>
    );
}

export default App;
