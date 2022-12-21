import { useContext } from "react";
import {
  colorContext,
  HSLReducerActionType,
  HSLReducerState,
} from "../../context/ColorContext";
import styles from "./Control.module.scss";
type controlProps = {
  title: string;
  incrementAction: HSLReducerActionType;
  decrementAction: HSLReducerActionType;
};

export const Control = ({
  decrementAction,
  incrementAction,
  title,
}: controlProps) => {
  const { dispatch, state: HSLColor } = useContext(colorContext);
  return (
    <div className={styles.control}>
      <p>
        {title}: {HSLColor[title as keyof HSLReducerState]}
      </p>
      <div>
        <button onClick={(e) => dispatch({ type: incrementAction })}>+</button>
        <button onClick={(e) => dispatch({ type: decrementAction })}>-</button>
      </div>
    </div>
  );
};
