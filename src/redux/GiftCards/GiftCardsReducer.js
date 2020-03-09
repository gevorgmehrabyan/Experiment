import {rightImage, cardTypes, cardInfo} from '../../data/GiftCardsPageData';
import {GET_GIFTCARDS} from './Types';

const initState= {
    rightImage,
    cardTypes,
    cardInfo
}

export const GiftCardsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_GIFTCARDS: 
            return {
                ...state
            };
        default:
            return state
    }
}