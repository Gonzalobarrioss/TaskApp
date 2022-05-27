import { ADD_NEW_TASK, SET_TASK, DELETE_TASK, UPDATE_TASK } from "../actions/tasksAction";

const initialState = {
    tasks: [],
    task: {
        id: '',
        title: '',
        desription: ''
    },
    contador: 0
};

function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_TASK:
            return { ...state, tasks: [...state.tasks, action.payload], contador: state.contador+1 };
        case SET_TASK:
            return { ...state, task: action.payload };
        case UPDATE_TASK:
            const updatedTasks =  state.tasks.map((item) => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        title: action.payload.title,
                        description: action.payload.description
                    }
                }
                return item
            })
            return {...state, tasks: updatedTasks}
        case DELETE_TASK:
            const data = state.tasks.filter((item)=>  {
                
                if(item.id === action.payload){
                    return false
                }

                return true
            })
            return {...state, tasks: data}
        default:
            return state;
    }
}
  
  export default tasksReducer;