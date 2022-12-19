import { HSLReducerActionType, useColor } from "../hooks/useColor";
import styles from "./ColorPanel.module.scss";

const ColorPanel = () => {
  const { dispatch, state: HSLColor } = useColor();
  return (
    <div className={styles.colorPanel}>
      <div
        className={styles.panel}
        style={{
          backgroundColor: `hsl(${HSLColor.hue} ${HSLColor.saturation}% ${HSLColor.lightness}%)`,
        }}
      ></div>
      <div className={styles.controls}>
        <div>
          <p>hue: {HSLColor.hue}</p>
          <div>
            <button
              onClick={(e) =>
                dispatch({ type: HSLReducerActionType.incrementHue })
              }
            >
              +
            </button>
            <button
              onClick={(e) =>
                dispatch({ type: HSLReducerActionType.decrementHue })
              }
            >
              -
            </button>
          </div>
        </div>
        <div>
          <p>saturation: {HSLColor.saturation}</p>
          <div>
            <button
              onClick={(e) =>
                dispatch({ type: HSLReducerActionType.incrementSaturaion })
              }
            >
              +
            </button>
            <button
              onClick={(e) =>
                dispatch({ type: HSLReducerActionType.decrementSaturaion })
              }
            >
              -
            </button>
          </div>
        </div>
        <div>
          <p>lightness: {HSLColor.lightness}</p>
          <div>
            <button
              onClick={(e) =>
                dispatch({ type: HSLReducerActionType.incrementLightness })
              }
            >
              +
            </button>
            <button
              onClick={(e) =>
                dispatch({ type: HSLReducerActionType.decrementLightness })
              }
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPanel;
