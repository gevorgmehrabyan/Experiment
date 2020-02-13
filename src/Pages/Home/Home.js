import React from 'react';
//styles
import './Home.scss';
//components
import BannersSlider from "../../Components/Sliders/BannersSlider";
import Product from "../../Elements/Product/Product";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";
//images
import Slider from "../../Components/Sliders/Slider";
import slide1 from '../../Assets/images/slide1.png';
import slide2 from '../../Assets/images/slide2.png';
import slide3 from '../../Assets/images/slide3.png';
import slide4 from '../../Assets/images/slide4.png';
import home_item from '../../Assets/images/home_item.png';
import mobile_item from '../../Assets/images/mobile_item.png';
import auto_item from '../../Assets/images/auto_item.png';
import elect_item from '../../Assets/images/elect_item.png';


function Home() {
    const sliderList = [
        {image: slide1, name: 'HOTOR Stand for Iphone', price: '$31.50'},
        {image: slide2, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
        {image: slide3, name: 'Solimo mobile cover', price: '$10.50'},
        {image: slide4, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
    ];
    const homeProdList = [
        {image: home_item, name: 'HOTOR Stand for Iphone', price: '$31.50'},
        {image: home_item, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
        {image: home_item, name: 'Solimo mobile cover', price: '$10.50'},
        {image: home_item, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
    ];
    const autoProdList = [
        {image: auto_item, name: 'HOTOR Stand for Iphone', price: '$31.50'},
        {image: auto_item, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
        {image: auto_item, name: 'Solimo mobile cover', price: '$10.50'},
        {image: auto_item, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
    ];
    const electProdList = [
        {image: elect_item, name: 'HOTOR Stand for Iphone', price: '$31.50'},
        {image: elect_item, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
        {image: elect_item, name: 'Solimo mobile cover', price: '$10.50'},
        {image: elect_item, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
    ];
    const mobileProdList = [
        {image: mobile_item, name: 'HOTOR Stand for Iphone', price: '$31.50'},
        {image: mobile_item, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
        {image: mobile_item, name: 'Solimo mobile cover', price: '$10.50'},
        {image: mobile_item, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
    ];
    const slider = sliderList.map((item, index) => {
        return <Product key={index} item={item}/>;
    });
    return (
        <div className='global_page'>
            <BannersSlider />
            <div className='container under_slider'>
                <HomeProducts title={'For home'} items={homeProdList}/>
                <HomeProducts title={'For automobiles'} items={autoProdList}/>
                <HomeProducts title={'Electronics'} items={electProdList}/>
                <HomeProducts title={'For mobile'} items={mobileProdList}/>
                <hr className='global_devider1'/>
                <h1 className='title_style'>You’ve checked those out</h1>
                <Slider children={slider}/>
                <hr className='global_devider2'/>
                <h1 className='title_style'>You might love those</h1>
                <Slider children={slider}/>
            </div>
        </div>
    );
}

export default Home;
