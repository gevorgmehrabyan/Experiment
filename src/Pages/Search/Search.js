import React from "react";
//styles
import './Search.scss';
//images
import slide_left from '../../Assets/svgs/slide_left.svg';
import slide_right from '../../Assets/svgs/slide_right.svg'
//Elements
import HomeProduct from "../../Elements/HomeProduct/HomeProduct";
import SortBy from "../../Elements/SortBy/SortBy";
import Filters from "../../Components/Filters/Filters";
import Slider from "../../Components/Sliders/Slider";
import Product from "../../Elements/Product/Product";
import { Pagination } from 'antd';
//Redux
import {connect} from "react-redux";

const Search = (props) => {
    const { productListRow , sliderList} = props ;
    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <img src={slide_left} alt='left'/>;
        }
        if (type === 'next') {
            return <img src={slide_right} alt='right'/>;
        }
        return originalElement;
    }

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

const mapStateToProps = (state) => {
    return{
        sliderList: state.home.sliderList,
        productListRow: state.search.productListRow
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);