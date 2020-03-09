import {GET_STOREPICKUP} from './Types';
import {delInfos, workInfos, leftImage} from '../../data/StorePickUpPageData';

const initState = {
    leftImage,
    workInfos,
    delInfos
};

export const StorePickUpReducer = (state = initState, action) => {
    switch(action.type){
        case GET_STOREPICKUP: 
            return {
                ...state
            };
        default:
            return state
    }
}