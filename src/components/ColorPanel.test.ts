import { describe, expect, it } from "vitest";
import colorPanel from "./ColorPanel";

describe("color panel", () => {
  it("should be defined", () => {
    expect(colorPanel).toBeDefined();
  });

  //   // hue related tests
  //   it("should have initial values of zero for all its properties", () => {
  //     expect(state.hue).toBe(0);
  //     expect(state.saturation).toBe(0);
  //     expect(state.lightness).toBe(0);
  //   });

  //   it("should increment hue", () => {
  //     dispatch({ type: HSLReducerActionType.incrementHue });
  //     dispatch({ type: HSLReducerActionType.incrementHue });
  //     dispatch({ type: HSLReducerActionType.incrementHue });
  //     expect(state.hue).toBe(3);
  //   });

  //   it("should decrement hue", () => {
  //     dispatch({ type: HSLReducerActionType.decrementHue });
  //     expect(state.hue).toBe(2);
  //   });

  //   it("should set hue to 360 if it is decremented to less than 0", () => {
  //     dispatch({ type: HSLReducerActionType.decrementHue });
  //     dispatch({ type: HSLReducerActionType.decrementHue });
  //     dispatch({ type: HSLReducerActionType.decrementHue });
  //     expect(state.hue).toBe(360);
  //   });

  //   it("should set hue to 0 if it is incremented to more than 360", () => {
  //     dispatch({ type: HSLReducerActionType.incrementHue });
  //     expect(state.hue).toBe(0);
  //   });

  //   // saturation related tests
  //   it("should increment saturation", () => {
  //     dispatch({ type: HSLReducerActionType.incrementSaturaion });
  //     dispatch({ type: HSLReducerActionType.incrementSaturaion });
  //     dispatch({ type: HSLReducerActionType.incrementSaturaion });
  //     expect(state.saturation).toBe(3);
  //   });

  //   it("should decrement saturation", () => {
  //     dispatch({ type: HSLReducerActionType.decrementSaturaion });
  //     expect(state.saturation).toBe(2);
  //   });

  //   it("should set saturation to 360 if it is decremented to less than 0", () => {
  //     dispatch({ type: HSLReducerActionType.decrementSaturaion });
  //     dispatch({ type: HSLReducerActionType.decrementSaturaion });
  //     dispatch({ type: HSLReducerActionType.decrementSaturaion });
  //     expect(state.saturation).toBe(360);
  //   });

  //   it("should set saturation to 0 if it is incremented to more than 360", () => {
  //     dispatch({ type: HSLReducerActionType.incrementSaturaion });
  //     expect(state.saturation).toBe(0);
  //   });

  //   // lightness related tests
  //   it("should increment lightness", () => {
  //     dispatch({ type: HSLReducerActionType.incrementLightness });
  //     dispatch({ type: HSLReducerActionType.incrementLightness });
  //     dispatch({ type: HSLReducerActionType.incrementLightness });
  //     expect(state.lightness).toBe(3);
  //   });

  //   it("should decrement lightness", () => {
  //     dispatch({ type: HSLReducerActionType.decrementLightness });
  //     expect(state.lightness).toBe(2);
  //   });

  //   it("should set lightness to 360 if it is decremented to less than 0", () => {
  //     dispatch({ type: HSLReducerActionType.decrementLightness });
  //     dispatch({ type: HSLReducerActionType.decrementLightness });
  //     dispatch({ type: HSLReducerActionType.decrementLightness });
  //     expect(state.lightness).toBe(360);
  //   });

  //   it("should set lightness to 0 if it is incremented to more than 360", () => {
  //     dispatch({ type: HSLReducerActionType.incrementLightness });
  //     expect(state.lightness).toBe(0);
  //   });
});
