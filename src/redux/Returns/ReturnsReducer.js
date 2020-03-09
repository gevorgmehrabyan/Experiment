import {GET_RETURNS} from './Types';
import {leftImage, howItWork, waysToReturns} from '../../data/ReturnsPageData';

const initState = {
    leftImage,
    howItWork,
    waysToReturns
};

export const ReturnsReducer = (state = initState, action) =>{
    switch(action.type){
        case GET_RETURNS: 
            return {
                ...state
            };
        default:
            return state
    }
}