import { ACTIVE_CHANGE } from '../constants';

const initialState = {
  mode: 'false'
}

const activeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_CHANGE: 
    return {
      ...state,
      mode: action.payload
    }
    
    default: 
      return state
  }
}

export default activeReducer;