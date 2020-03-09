import {leftImage, rightImage, circleContent, historyContent, missions} from '../../data/AboutPageData';
import {GET_ABOUTCONTENT} from './Types';

const initState = {
    leftImage, 
    rightImage,
    circleContent,
    historyContent,
    missions
}

export const AboutReducer = (state = initState , action) => {
    switch (action.type){
        case GET_ABOUTCONTENT: 
        return {
            ...state
        };
        default:
            return state;
    }
}