import {GET_OTHERPAGES} from './Types';
import {
    customerReviewsUnavailable, 
    customerReviewsThankYou, 
    feedbackMessage,
    purchaseFailed,
    purchaseSuccessful
} from '../../data/OtherPagesData';

const initState = {
    customerReviewsUnavailable,
    customerReviewsThankYou,
    feedbackMessage,
    purchaseFailed,
    purchaseSuccessful
}

export const OtherPagesReducer = (state=initState, action) => {
    switch(action.type){
        case GET_OTHERPAGES:
            return{
                ...state
            };
        default:
            return state
    }
}