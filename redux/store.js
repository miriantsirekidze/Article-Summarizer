import { createStore, combineReducers } from 'redux';
import themeReducer from './reducers/themeReducer';
import fontReducer from './reducers/fontReducer';
import activeReducer from './reducers/activeReducer';
import modeReducer from './reducers/modeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  font: fontReducer,
  active: activeReducer,
  mode: modeReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore;
