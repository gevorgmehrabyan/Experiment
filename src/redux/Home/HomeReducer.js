import {sliderList, autoProdList, homeProdList, electProdList, mobileProdList} from '../../data/HomePageData';
import {
    GET_AUTOPRODLIST,
    GET_ELECTPRODLIST,
    GET_HOMEPRODLIST,
    GET_MOBILEPRODLIST,
    GET_SLIDERLIST
} from "./Types";

const initState = {
    sliderList,
    autoProdList,
    homeProdList,
    electProdList,
    mobileProdList
};

export const HomeReducer = ( state = initState, action) => {
    switch (action.type) {
        case GET_SLIDERLIST:
            return {
                ...state,
            };
        case GET_AUTOPRODLIST:
            return {
                ...state,
            }
        case GET_HOMEPRODLIST:
            return {
                ...state,
            };
        case GET_ELECTPRODLIST:
            return {
                ...state,
            };
        case GET_MOBILEPRODLIST:
            return {
                ...state,
            }
        default:
            return state;
    }
}