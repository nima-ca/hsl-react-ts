import { useReducer } from "react";

export type HSLReducerState = {
  hue: number;
  saturation: number;
  lightness: number;
};

const initialState: HSLReducerState = {
  hue: 0,
  lightness: 0,
  saturation: 0,
};

export enum HSLReducerActionType {
  incrementHue = "INCREMENT_HUE",
  decrementHue = "DECREMENT_HUE",

  incrementSaturaion = "INCREMENT_SATURATION",
  decrementSaturaion = "DECREMENT_SATURATION",

  incrementLightness = "INCREMENT_LIGHTNESS",
  decrementLightness = "DECREMENT_LIGHTNESS",
}

type HSLReducerAction = {
  type: HSLReducerActionType;
};

const HSLReducer = (
  state: HSLReducerState,
  { type }: HSLReducerAction
): HSLReducerState => {
  if (type === HSLReducerActionType.incrementHue) {
    return {
      ...state,
      hue: state.hue === 360 ? 0 : state.hue++,
    };
  }
  if (type === HSLReducerActionType.decrementHue) {
    return {
      ...state,
      hue: state.hue === 0 ? 360 : state.hue--,
    };
  }
  if (type === HSLReducerActionType.incrementSaturaion) {
    return {
      ...state,
      saturation: state.saturation === 100 ? 0 : state.saturation++,
    };
  }
  if (type === HSLReducerActionType.decrementSaturaion) {
    return {
      ...state,
      saturation: state.saturation === 0 ? 100 : state.saturation--,
    };
  }
  if (type === HSLReducerActionType.incrementLightness) {
    return {
      ...state,
      lightness: state.lightness === 100 ? 0 : state.lightness++,
    };
  }
  if (type === HSLReducerActionType.decrementLightness) {
    return {
      ...state,
      lightness: state.lightness === 0 ? 100 : state.lightness--,
    };
  }
  return state;
};
export const useColor = () => {
  const [state, dispatch] = useReducer(HSLReducer, initialState);
  return { state, dispatch };
};
