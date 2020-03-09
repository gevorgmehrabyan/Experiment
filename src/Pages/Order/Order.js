import React from "react";
//Style
import './Order.scss';
//Elements
import PurchaseChooses from "../../Elements/PurchaseChooses/PurchaseChooses";
import {Input, Select} from 'antd';
import OrderItem from '../../Elements/OrderItem/OrderItem';
//Redux
import { connect } from "react-redux";

const {Search} = Input;
const {Option} = Select;

const Order = (props) => {
    const {orderList, options} = props ;
    return (
        <div className='order__empty'>
            <div className='container'>
                <div className='order__empty__main'>
                    <div className='order__empty__main__row'>
                        <h1>Purchase history</h1>
                        <div className='search__wrapper'>
                            <div>
                                <h4>Find the order:</h4>
                                <Search
                                    placeholder="Search"
                                />
                            </div>
                            <div className='style__span'>
                                <span>Filter by</span>
                                <Select className='gev' defaultValue="last 30 days">
                                    {
                                        options.map((item) => {
                                            return (
                                                <Option value={item}>{item}</Option>
                                            )
                                        })
                                    }
                                </Select>
                            </div>
                        </div>
                        {
                            (orderList.length > 0) ?
                                <div className='order__list'>
                                    {
                                        orderList.map((item, index) =>{
                                            return <OrderItem item={item}/>
                                        })
                                    }
                                </div>
                                :
                                <h3>You did not place any orders in last 6 months</h3>
                        }
                    </div>
                    <PurchaseChooses/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        options: state.order.options,
        orderList: state.order.orderList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order); 