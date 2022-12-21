import { render, fireEvent } from "../../test/test-utils";
import { describe, expect, it } from "vitest";
import { Control } from "./Control";
import { HSLReducerActionType } from "../../context/ColorContext";

const extractState = (title: string) => {
  return +title.split(":")[1]?.trim();
};

describe("Hue Control Component", () => {
  it("should have hue title and plus and minus buttons", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="hue"
        incrementAction={HSLReducerActionType.incrementHue}
        decrementAction={HSLReducerActionType.decrementHue}
      />
    );
    const plusButton = getByText("+");
    expect(plusButton).toBeDefined();

    const minusButton = getByText("-");
    expect(minusButton).toBeDefined();

    const title = getByTestId("element-title");
    expect(title).toBeDefined();
  });

  it("Increment Hue", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="hue"
        incrementAction={HSLReducerActionType.incrementHue}
        decrementAction={HSLReducerActionType.decrementHue}
      />
    );
    let currentState = extractState(getByTestId("element-title").innerHTML);
    const plusButton = getByText("+");

    fireEvent.click(plusButton);
    expect(extractState(getByTestId("element-title").innerHTML)).toBe(
      ++currentState
    );
  });

  it("Decrement Hue", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="hue"
        incrementAction={HSLReducerActionType.incrementHue}
        decrementAction={HSLReducerActionType.decrementHue}
      />
    );
    let currentState = extractState(getByTestId("element-title").innerHTML);
    const minusButton = getByText("-");

    fireEvent.click(minusButton);
    expect(extractState(getByTestId("element-title").innerHTML)).toBe(
      --currentState
    );
  });
});

describe("Saturation Control Component", () => {
  it("should have Saturation title and plus and minus buttons", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="Saturation"
        incrementAction={HSLReducerActionType.incrementSaturation}
        decrementAction={HSLReducerActionType.decrementSaturation}
      />
    );
    const plusButton = getByText("+");
    expect(plusButton).toBeDefined();

    const minusButton = getByText("-");
    expect(minusButton).toBeDefined();

    const title = getByTestId("element-title");
    expect(title).toBeDefined();
  });

  it("Increment Saturation", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="saturation"
        incrementAction={HSLReducerActionType.incrementSaturation}
        decrementAction={HSLReducerActionType.decrementSaturation}
      />
    );
    let currentState = extractState(getByTestId("element-title").innerHTML);
    const plusButton = getByText("+");
    fireEvent.click(plusButton);
    expect(extractState(getByTestId("element-title").innerHTML)).toBe(
      ++currentState
    );
  });

  it("Decrement Saturation", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="saturation"
        incrementAction={HSLReducerActionType.incrementSaturation}
        decrementAction={HSLReducerActionType.decrementSaturation}
      />
    );
    let currentState = extractState(getByTestId("element-title").innerHTML);
    const minusButton = getByText("-");

    fireEvent.click(minusButton);
    expect(extractState(getByTestId("element-title").innerHTML)).toBe(
      --currentState
    );
  });
});

describe("Lightness Control Component", () => {
  it("should have Lightness title and plus and minus buttons", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="lightness"
        incrementAction={HSLReducerActionType.incrementLightness}
        decrementAction={HSLReducerActionType.decrementLightness}
      />
    );
    const plusButton = getByText("+");
    expect(plusButton).toBeDefined();

    const minusButton = getByText("-");
    expect(minusButton).toBeDefined();

    const title = getByTestId("element-title");
    expect(title).toBeDefined();
  });

  it("Increment Lightness", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="lightness"
        incrementAction={HSLReducerActionType.incrementLightness}
        decrementAction={HSLReducerActionType.decrementLightness}
      />
    );
    let currentState = extractState(getByTestId("element-title").innerHTML);
    const plusButton = getByText("+");

    fireEvent.click(plusButton);
    expect(extractState(getByTestId("element-title").innerHTML)).toBe(
      ++currentState
    );
  });

  it("Decrement Lightness", () => {
    const { getByText, getByTestId } = render(
      <Control
        title="lightness"
        incrementAction={HSLReducerActionType.incrementLightness}
        decrementAction={HSLReducerActionType.decrementLightness}
      />
    );
    let currentState = extractState(getByTestId("element-title").innerHTML);
    const minusButton = getByText("-");

    fireEvent.click(minusButton);
    expect(extractState(getByTestId("element-title").innerHTML)).toBe(
      --currentState
    );
  });
});
