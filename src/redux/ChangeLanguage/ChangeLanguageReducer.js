import {langs, currentLang} from '../../data/LanguageChangeData';
import {CHANGE_LANGUAGE} from './Types';

const initState = {
    langs,
    currentLang
};

export const ChangeLanguageReducer = (state=initState, action) => {
    switch(action.type){
        case CHANGE_LANGUAGE: 
            return {
                ...state,
                currentLang: action.payload
            }
        default:
            return state
    }
}