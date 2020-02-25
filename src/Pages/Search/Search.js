import React from "react";
import './Search.scss';
import Slider from "../../Components/Sliders/Slider";
import slide1 from "../../Assets/images/slide1.png";
import slide2 from "../../Assets/images/slide2.png";
import slide3 from "../../Assets/images/slide3.png";
import slide4 from "../../Assets/images/slide4.png";
import HomeProduct from "../../Elements/HomeProduct/HomeProduct";
import SortBy from "../../Elements/SortBy/SortBy";

const Search = () => {

    const sliderList = [
        {image: slide1, name: 'HOTOR Stand for Iphone', price: '$31.50'},
        {image: slide2, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
        {image: slide3, name: 'Solimo mobile cover', price: '$10.50'},
        {image: slide4, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
    ];
    const slider = sliderList.map((item, index) => {
        return <HomeProduct key={index} item={item}/>;
    });
    return(
        <div className='search_input_page'>
            <div className='results'>
                <div className='results_wrapper'>
                    <p>1824 results for “adaptor”</p>
                    <SortBy/>
                </div>
            </div>
            <div className='container'>
                <h1 className='title_style'>You’ve checked those out</h1>
                <Slider children={slider}/>
                <hr className='global_devider2'/>
                <h1 className='title_style'>You might love those</h1>
                <Slider children={slider}/>
            </div>
        </div>
    );
}

export default Search;