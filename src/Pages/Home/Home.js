import React from 'react';
//styles
import './Home.scss';
//components
import BannersSlider from "../../Components/Sliders/BannersSlider";
import HomeProduct from "../../Elements/HomeProduct/HomeProduct";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";
//images
import Slider from "../../Components/Sliders/Slider";
import {connect} from "react-redux";

function Home(props) {
    const slider = props.sliderList.map((item, index) => {
        return <HomeProduct key={index} item={item}/>;
    });
    return (
        <div className='global_page'>
            <BannersSlider />
            <div className='container under_slider'>
                <HomeProducts title={'For home'} items={props.homeProdList}/>
                <HomeProducts title={'For automobiles'} items={props.autoProdList}/>
                <HomeProducts title={'Electronics'} items={props.electProdList}/>
                <HomeProducts title={'For mobile'} items={props.mobileProdList}/>
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

const mapStateToProps = ( state ) => {
    return {
        homeProdList: state.home.homeProdList,
        autoProdList: state.home.autoProdList,
        electProdList: state.home.electProdList,
        mobileProdList: state.home.mobileProdList,
        sliderList: state.home.sliderList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
