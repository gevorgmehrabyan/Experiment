import {priceOfAdd, typesOfAdd, rightImage} from '../../data/AdsOnElementPageData';
import {GET_ADSONELEMENT} from './Types';

const initState = {
    priceOfAdd, 
    typesOfAdd,
    rightImage
}

export const AdsOnElementReducer = ( state = initState, action ) => {
    switch(action.type){
        case GET_ADSONELEMENT: 
            return {
                ...state
            };
        default: 
            return state
    }
}