import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}


//! Now creating a Reducer. If we reived any actions related to searching cats we are going to do something
export const searchCats = (state = initialStateSearch, action = {}) => { //! Here using ES6 we specified the default value of first parameter to be initialState object and second one an empty object 
    // console.log(action.type)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload }); // !OR
            // return { ...state, searchField: action.payload } //! Using Object spread operator
        default:
            return state;
    }
}

const initialStateCats = {
    isPending: false,
    cats: [],
    error: ''
}

export const requestCats = (state = initialStateCats, action = {}) => {
    switch (action.type) {
        case REQUEST_CATS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_CATS_SUCCESS:
            return Object.assign({}, state, { cats: action.payload, isPending: false })
        case REQUEST_CATS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}