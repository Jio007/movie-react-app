import * as actionTypes from './actions';

const initialState = {
    search: ''
}

const reducer =  (state = initialState, action) => {
 
    switch (action.type) {
        case actionTypes.SEARCH_MOVIE:
            return { 
                ...state,
                search: action.text
            }
        default:
            return state
    }
}

export default reducer;
