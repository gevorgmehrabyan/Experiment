import {GET_ORDER} from './Type';
import {options, orderList , sliderList} from '../../data/OrderPageData';

const initState= {
    options, 
    orderList,
    sliderList
}

export const OrderReducer = (state= initState, action) => {
    switch(action.type){
        case GET_ORDER: 
            return{
                ...state
            };
        default:
            return state
    }
}