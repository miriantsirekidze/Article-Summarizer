import { THEME_CHANGE } from '../constants';

const initialState = {
  mode: 'Dark'
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload
      }

    default: 
      return state
  }
}


export default themeReducer;