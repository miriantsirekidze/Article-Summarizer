import { THEME_CHANGE } from "./constants";
import { FONT_CHANGE } from "./constants";
import { ACTIVE_CHANGE } from "./constants";
import { MODE_CHANGE } from "./constants";

export const switchMode = (mode) => {
  return {
    type: THEME_CHANGE,
    payload: mode
  }
}

export const changeFont = (mode) => {
  return {
    type: FONT_CHANGE,
    payload: mode
  }
}

export const changeActive = (mode) => {
  return {
    type: ACTIVE_CHANGE,
    payload: mode
  }
}

export const changeMode = (mode) => {
  return {
    type: MODE_CHANGE,
    payload: mode
  }
}