import React from 'react';
//styles
import './App.css';
//components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <div className='global_page'>
        <Header/>
        <Search/>
        <Footer/>
    </div>
  );
}

export default App;
