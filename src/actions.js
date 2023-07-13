import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAILED
} from './constants';


export const setSearchField = (text) => { //! the function is returning an object
    // console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestCats = () => (dispatch) => { //! this is a highrer order function. A function that returns another function
    dispatch({ type: REQUEST_CATS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data}))
        .catch(err => dispatch({ type: REQUEST_CATS_FAILED, payload: err}))
}