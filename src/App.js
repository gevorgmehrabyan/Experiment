import React from 'react';
//styles
import './App.css';
//components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SortBy from "./Elements/SortBy/SortBy";

function App() {
  return (
    <div className='global_page'>
        <Header/>
        <SortBy/>
        <Footer/>
    </div>
  );
}

export default App;
