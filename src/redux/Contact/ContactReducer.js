import {officeInfo, contactFormInfo } from '../../data/ContactPageData';
import {GET_CONTACT} from './Types';

const initState = {
    officeInfo,
    contactFormInfo
}

export const ContactReducer = ( state = initState, action) => {
    switch(action.type){
        case GET_CONTACT: 
            return {
                ...state
            };
        default:
            return state
    }
}