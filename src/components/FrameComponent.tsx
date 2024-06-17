import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.timeParent}>
          <a className={styles.time}>9:41</a>
          <div className={styles.frameContainer}>
            <div className={styles.combinedShapeParent}>
              <img
                className={styles.combinedShapeIcon}
                alt=""
                src="/combined-shape.svg"
              />
              <img className={styles.wiFiIcon} alt="" src="/wifi.svg" />
              <img
                className={styles.batteryIcon}
                alt=""
                src="/battery@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameDiv}>
          <div className={styles.shareContainerParent}>
            <div className={styles.shareContainer}>
              <a className={styles.share}>Share</a>
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider.svg" />
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/vector-4.svg" />
      </div>
    </section>
  );
};

export default FrameComponent;
