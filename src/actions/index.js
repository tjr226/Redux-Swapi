// we'll need axios
import Axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getStarWars = () => dispatch => {
    dispatch({ type: FETCHING }); 
    Axios.get('https://swapi.co/api/people/')
        .then(res => {
            console.log(res);  
            dispatch({ type: SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err.response)
            dispatch({ type: FAILURE, payload: `${err.response.status} ${err.response.data}` })  
        })
}
