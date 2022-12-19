import styles from "./ColorPanel.module.scss";

const ColorPanel = () => {
  return (
    <div className={styles.colorPanel}>
      <div className={styles.panel}></div>
      <div className={styles.controls}>
        <div>
          <p>hue: {10}</p>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <div>
          <p>saturation: {10}</p>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <div>
          <p>lightness: {10}</p>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPanel;
