import { useContext } from "react";
import { colorContext, HSLReducerActionType } from "../context/ColorContext";
import styles from "./ColorPanel.module.scss";
import { Control } from "./Control/Control";

const ColorPanel = () => {
  const { dispatch, state: HSLColor } = useContext(colorContext);

  return (
    <div className={styles.colorPanel}>
      <div
        className={styles.panel}
        style={{
          backgroundColor: `hsl(${HSLColor.hue} ${HSLColor.saturation}% ${HSLColor.lightness}%)`,
        }}
      ></div>
      <div className={styles.controls}>
        <Control
          title="hue"
          incrementAction={HSLReducerActionType.incrementHue}
          decrementAction={HSLReducerActionType.decrementHue}
        />
        <Control
          title="saturation"
          incrementAction={HSLReducerActionType.incrementSaturaion}
          decrementAction={HSLReducerActionType.decrementSaturaion}
        />
        <Control
          title="lightness"
          incrementAction={HSLReducerActionType.incrementLightness}
          decrementAction={HSLReducerActionType.decrementLightness}
        />
      </div>
    </div>
  );
};

export default ColorPanel;
