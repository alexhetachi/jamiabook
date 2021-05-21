import { 
    USER_LOADED, 
    USER_LOADING,
    AUTH_ERROR,
    REGESTER_SUCCESS,
    REGESTER_FAIL,
    LOGOUT_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import {returnErrors} from './errorActions'
import axios from 'axios';

export const loadUser = () => (dispatch, getState) => {
    //user loading
    dispatch({type:USER_LOADING})

    //get token from local storage
    const token = getState().auth.token;

    //headers
    const config = {
        headers:{
            "Contect-type":"application/json"
        }
    }
    if(token){
        config.headers['x-auth-token'] = token;
    }

    axios.get('/api/login/user', config)
        .then( res => dispatch({
            type:USER_LOADED,
            payload:res.data
        }))
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
            type:AUTH_ERROR
            })
        })
}

// Sign up
export const signup = (user) => (dispatch) => {
    console.log("action: "+user.email)
    axios({
        method: 'post',
        url: '/api/signup',
        data: user
      }).then(user =>dispatch({
        type:REGESTER_SUCCESS,
        payload:user.data
        // console.log(user)
      })).catch(err => {
          console.log(err.response.status)
        dispatch(returnErrors(err.response.data, err.response.status,'REGESTER_FAIL'));
        dispatch({
          type:REGESTER_FAIL
      })})
}

//Log out

export const logout = () => {
    return {
        type:LOGOUT_SUCCESS
    }
}

//Login
export const login = (user) => (dispatch) => {
    axios({
        method:'post',
        url:'/api/login',
        data: user
    }).then(user => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload:user.data
        })
    }).catch(err => {
        console.log(err.response.status)
        dispatch(returnErrors(err.response.data, err.response.status,'LOGIN_FAIL'));
        dispatch({
            type:LOGIN_FAIL
        })
    })
}