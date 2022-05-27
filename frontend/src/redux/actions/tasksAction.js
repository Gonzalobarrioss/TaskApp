export const GET_TASKS = 'GET_TASKS';
export const GET_TASK = 'GET_TASK';
export const SET_TASK = 'SET_TASK';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const getTasks = tasks => dispatch => {
  dispatch({
    type: GET_TASKS,
    payload: tasks
  });
};

export const getTask = task => dispatch => {
  dispatch({
    type: GET_TASK,
    payload: task
  });
};

export const setTask = task => dispatch => {
  dispatch({
    type: SET_TASK,
    payload: task
  });
};

export const addNewTask = task => dispatch => {
  dispatch({
    type: ADD_NEW_TASK,
    payload: task
  });
};

export const deleteTask = id => dispatch => {
  dispatch({
    type: DELETE_TASK,
    payload: id
  });
};

export const updateTask = task => dispatch => {
  dispatch({
    type: UPDATE_TASK,
    payload: task
  });
};

