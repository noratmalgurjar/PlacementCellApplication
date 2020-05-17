import { UPDATE_COUNT } from './constants';

const initialState = {
    count: 100
}

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_COUNT: return {
            ...state,
            count: state.count - 1
        }

        default: return state
    }
}

export default countReducer; 