import {
 ADD_TODO,
 DELETE_TODO,
 COMPLETE_TODO,
 UPDATE_TODO
} from './constants';


export const addTodo = (obj) =>  dispatch => {
    try {
     dispatch({
         type: ADD_TODO,
         payload: obj
     })
    } catch(err) {
        console.log(err)
    }
}

export const updateTodo = (obj) =>  dispatch => {
    console.log('OBJETO: ', obj)
    try {
     dispatch({
         type: UPDATE_TODO,
         payload: obj
     })
    } catch(err) {
        console.log(err)
    }
}


export const completeTodo = (id) =>  dispatch => {
    try {
     dispatch({
         type: COMPLETE_TODO,
         payload: id
     })
    } catch(err) {
        console.log(err)
    }
}



export const deleteTodo = (id) =>  dispatch => {
    try {
     dispatch({
         type: DELETE_TODO,
         payload: id
     })
    } catch(err) {
        console.log(err)
    }
}
