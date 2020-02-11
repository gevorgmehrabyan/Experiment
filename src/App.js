import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BannersSlider from "./Components/Sliders/BannersSlider";
import SyncSlider from "./Components/Sliders/SyncSlider";
import Slider from "./Components/Sliders/Slider";
import slide1 from './Assets/images/slide1.png';
import slide2 from './Assets/images/slide2.png';
import slide3 from './Assets/images/slide3.png';
import slide4 from './Assets/images/slide4.png';
import Product from "./Components/Sliders/Slider/Product/Product";
import HomeProducts from "./Components/HomeProducts/HomeProducts";


function App() {
    const items = [1, 2, 3, 4, 5];
    const sliderList = [
        {image: slide1, name: 'HOTOR Stand for Iphone', price: '$31.50'},
        {image: slide2, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
        {image: slide3, name: 'Solimo mobile cover', price: '$10.50'},
        {image: slide4, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
    ];
    const responsive = {
        1024: {items: 4},
        800: {items: 3},
        520: {items: 3},
        412: {items: 2},
        300: {items: 1}
    };
    const slider = sliderList.map((item, index) => {
        return <Product key={index} item={item}/>;
    });
  return (
    <div className='global_page'>
        <Header/>
        <BannersSlider />
        <SyncSlider />
        <Slider
            dotsDisabled={true}
            items={items}
            responsive={responsive}
            showArrows={true}
            children={slider}
        />
        <HomeProducts title={'For home'} items={sliderList}/>
        <Footer/>
    </div>
  );
}

export default App;
