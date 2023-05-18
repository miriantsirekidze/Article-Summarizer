import { MODE_CHANGE } from '../constants';

const initialState = {
  mode: 'Single Paragraph'
}

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODE_CHANGE: 
    return {
      ...state,
      mode: action.payload
    }
    
    default: 
      return state
  }
}

export default modeReducer;