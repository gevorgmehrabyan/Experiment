import {productListRow} from "../../data/SearchPageData";
import {GET_PRODUCTLISTROW} from "./Types";

const initState = {
    productListRow
};

export const SearchReducer = ( state = initState, action) => {
    switch (action.type) {
        case  GET_PRODUCTLISTROW:
            return {
                ...state,
            };
        default:
            return state;
    }
}