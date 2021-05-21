import { ADD_POST, FETCH_POSTS, ADD_COMMENT, ADD_LIKE } from './types';
import axios from 'axios';
let x = 0, newData = [];
let limit = 10, page = 0;

export const fetchPosts = () => dispatch => {

    if(x === 0){
        axios.post('/api/fetchPosts',{ page, limit })
        .then(posts => {
          newData = posts.data
          console.log('First x=0:'+ newData)
          dispatch({
              type: FETCH_POSTS,
              payload: posts.data
          })
          page = page + 1
          x=1
      })
    }else{
      axios.post('/api/fetchPosts',{ page, limit })
        .then(posts =>{
        //   console.log('Old:'+ newData.length)
          newData = [...newData,...posts.data]
        //   console.log('New:'+ newData.length)
          dispatch({
              type: FETCH_POSTS,
              payload: newData
          }) 
        page = page + 1
      })
    }
      
      
};


export const addPost = ( post ) => dispatch => {
  if(post.get('myImage') === '') console.log('no image in front');
  else {
      axios({
          method: 'post',
          url: '/api/addPost',
          data: post,
          headers: {
          'Content-Type': 'multipart/form-data'
      }
      }).then(item =>
          dispatch({
          type: ADD_POST,
          payload: item.data
          })
      ).catch(err => {
          console.log(err)
      })
  }
}

export const addComment = ( comment ) => dispatch => {
      axios({
          method: 'post',
          url: '/api/addComment',
          data: comment,
      }).then(item =>
          dispatch({
          type: ADD_COMMENT,
          payload: item.data
          })
      ).catch(err => {
          console.log(err)
      })
}

export const addLike = ( like ) => dispatch => {
  axios({
      method: 'post',
      url: '/api/addLike',
      data: like,
  }).then(item =>
      dispatch({
      type: ADD_LIKE,
      payload: item.data
      })
  ).catch(err => {
      console.log(err)
  })
}
