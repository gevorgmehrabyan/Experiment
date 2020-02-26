import React from "react";
//styles
import './Search.scss';
//images
import Slider from "../../Components/Sliders/Slider";
import slide1 from "../../Assets/images/slide1.png";
import slide2 from "../../Assets/images/slide2.png";
import slide3 from "../../Assets/images/slide3.png";
import slide4 from "../../Assets/images/slide4.png";
import product from '../../Assets/images/product.png';
import slide_left from '../../Assets/svgs/slide_left.svg';
import slide_right from '../../Assets/svgs/slide_right.svg'
//Elements
import HomeProduct from "../../Elements/HomeProduct/HomeProduct";
import SortBy from "../../Elements/SortBy/SortBy";
import Filters from "../../Components/Filters/Filters";
import Product from "../../Elements/Product/Product";
import { Pagination } from 'antd';

const Search = () => {

    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <img src={slide_left} alt='left'/>;
        }
        if (type === 'next') {
            return <img src={slide_right} alt='right'/>;
        }
        return originalElement;
    }

    const sliderList = [
        {image: slide1, name: 'HOTOR Stand for Iphone', price: '$31.50'},
        {image: slide2, name: 'Lesco Domestic 232V Adaptor ', price: '$4.45'},
        {image: slide3, name: 'Solimo mobile cover', price: '$10.50'},
        {image: slide4, name: 'ADAS 7.84 Dash Cam', price: '$244.45'}
    ];
    const slider = sliderList.map((item, index) => {
        return <HomeProduct key={index} item={item}/>;
    });

    const productListRow = [
        {img: product, name: 'GreenBeans Ultra meat grinder', describe: 'Super fast Green Beans grinder. 166 fps and 110v. ', count: 0, rewcount: 1 ,price: 128 ,discount:  25 , size: 16 },
        {img: product, name: 'Tefal Pro Express ultimate GV 9563', describe: 'Tefal Pro Express, 110v with extra heat 166 fps and 110v', count: 4, rewcount: 2 , price: 450 , discount: 70 , size: 16 },
        {img: product, name: 'Ocooker Choper', describe: '1000 tim new choper with metal cover 166 fps and 110v', count: 3, rewcount: 356, price: 210 , discount: 25 , size: 16 },
        {img: product, name: 'Dyson Supersonic', describe: '600w supersonic heat fan with colling option', count: 5, rewcount: 10, price: 700, discount: 65 , size: 16 }
    ];

    return(
        <div className='search_input_page'>
            <div className='results'>
                <div className='results_wrapper'>
                    <p>1824 results for “adaptor”</p>
                    <SortBy/>
                </div>
            </div>
            <div className='container'>
                <div className='search_main'>
                    <Filters/>
                    <div className='product_list'>
                        <div className='product_list_row'>
                            {
                                productListRow.map( item => {
                                  return  <Product item={item}/>
                                })
                            }
                        </div>
                        <div className='product_list_row'>
                            {
                                productListRow.map( item => {
                                    return  <Product item={item}/>
                                })
                            }
                        </div>
                        <div className='product_list_row'>
                            {
                                productListRow.map( item => {
                                    return  <Product item={item}/>
                                })
                            }
                        </div>
                        <div className='product_list_row'>
                            {
                                productListRow.map( item => {
                                    return  <Product item={item}/>
                                })
                            }
                        </div>
                        <div className='product_list_row'>
                            {
                                productListRow.map( item => {
                                    return  <Product item={item}/>
                                })
                            }
                        </div>
                        <div className='pagination_wrapper'>
                            <Pagination total={500} itemRender={itemRender} />
                        </div>
                    </div>
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