import { FONT_CHANGE } from '../constants';

const initialState = {
  mode: 'Normal'
}

const fontReducer = (state = initialState, action) => {
  switch (action.type) {
    case FONT_CHANGE: 
    return {
      ...state,
      mode: action.payload
    }
    
    default: 
      return state
  }
}

export default fontReducer;