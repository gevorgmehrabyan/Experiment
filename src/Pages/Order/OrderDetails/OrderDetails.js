import React from "react";
import './OrderDetails.scss';
import Slider from "../../../Components/Sliders/Slider";
import HomeProduct from "../../../Elements/HomeProduct/HomeProduct";
import { connect } from "react-redux";

const OrderDetails = (props) => {
    const {order, sliderList} = props;

    const slider = sliderList.map((item, index) => {
        return <HomeProduct key={index} item={item}/>;
    });
    return (
        
        <div className='order__details'>
            <div className='container'>
                <div className='order__details__main'>
                    <div className='order__details__info'>
                        <div className='order__details__info__item'>
                            <h1>Order details</h1>
                            <div className='order__details__row'>
                                <div className='title__style'>
                                    <h3>Order item:</h3>
                                </div>
                                <div className='order__details__row__item'>
                                    <img src={order.image} alt={order.name} />
                                    <div>
                                        <h2>{order.name}</h2>
                                        <span>Element #{order.elementId}</span>
                                        <p>Qty: <span>{order.count}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='order__details__row'>
                                <div className='title__style'>
                                    <h3>Order information:</h3>
                                </div>
                                <div className='order__details__row__block'>

                                </div>
                            </div>
                            <div className='order__details__row'>
                                <div className='title__style'>
                                    <h3>Shipment information:</h3>
                                </div>
                                <div className='order__details__row__block'>

                                </div>
                            </div>
                            <div className='order__details__row'>
                                <div className='title__style'>
                                    <h3>Payment Information:</h3>
                                </div>
                                <div className='order__details__row__block'>

                                </div>
                            </div>
                        </div>
                        <div className='order__details__info__total'>
                            <h3>Order summary:</h3>
                            <div>
                                <p>Items: </p>
                                <h3>${order.orderTotal}</h3>
                            </div>
                            <div>
                                <p>Shipping: {order.shippingType}</p>
                                <h3 className='orange'>Free</h3>
                            </div>
                            <hr />
                            <div>
                                <h3>Order total:</h3>
                                <h3 className='red'>${order.orderTotal}</h3>
                            </div>
                        </div>
                    </div>
                    <h1>Customers also bought this products</h1>
                    <Slider children={slider}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.order.orderList[0],
        sliderList: state.order.sliderList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails) ;