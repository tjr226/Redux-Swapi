// we'll need axios
import Axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getStarWars = () => dispatch => {
    // console.log(FETCHING)
    dispatch({ type: "FETCHING" })
    Axios.get('https://swapi.co/api/people/')
        .then(res => {
            // console.log("res successful", res);  
            dispatch({ type: SUCCESS, payload: res.data.results });
        })
        .catch(err => {
            // console.log(err.response)
            dispatch({ type: FAILURE, payload: `${err.response.status} Error` })  
        })
}
