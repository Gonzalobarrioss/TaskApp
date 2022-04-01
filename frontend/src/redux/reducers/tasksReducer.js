import { GET_TASKS, GET_TASK, ADD_NEW_TASK, SET_TASK, DELETE_TASK, UPDATE_TASK } from "../actions/tasksAction";

const initialState = {
    tasks: [],
    task: {
        id: 0,
        title: '',
        desription: ''
    }
};

function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return  state.tasks
        case GET_TASK:
            return state.task 
        case ADD_NEW_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case SET_TASK:
            return { ...state, task: action.payload };
        case DELETE_TASK:
            return { ...state, tasks: action.payload };
        case UPDATE_TASK:
            return { ...state, tasks: action.payload };
        default:
            return state;
    }
}
  
  export default tasksReducer;