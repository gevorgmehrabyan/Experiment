import { workList, rightImage} from '../../data/CareersPageData';
import {GET_CAREERS} from './Type';

const initState = {
    workList, 
    rightImage
}

export const CareersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_CAREERS: 
            return {
                ...state
            }
        default:
            return state    
    }
}