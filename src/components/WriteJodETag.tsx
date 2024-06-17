import { FunctionComponent } from "react";
import styles from "./WriteJodETag.module.css";

export type WriteJodETagType = {
  className?: string;
};

const WriteJodETag: FunctionComponent<WriteJodETagType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.writeJodETag, className].join(" ")}>
      <div className={styles.activateJodEDevice}>
        <div className={styles.activateJodEDeviceParent}>
          <b className={styles.activateJodEDevice1}>Activate jod-e Device</b>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <img
                className={styles.frameChild}
                alt=""
                src="/group-176737@2x.png"
              />
              <img
                className={styles.batteryIcon}
                loading="lazy"
                alt=""
                src="/battery@2x.png"
              />
              <img
                className={styles.combinedShapeIcon}
                loading="lazy"
                alt=""
                src="/combined-shape.svg"
              />
              <img
                className={styles.wiFiIcon}
                loading="lazy"
                alt=""
                src="/wifi.svg"
              />
            </div>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
        <div className={styles.timeWrapper}>
          <a className={styles.time}>9:41</a>
        </div>
        <div className={styles.scanInstructions}>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </div>
            <div className={styles.doYouHave}>Do you have jod-e device?</div>
            <div className={styles.frameInner} />
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.writeJodETag1}>Write jod-e Tag</div>
            </div>
            <div className={styles.frameChild1} />
            <div className={styles.readyToScanWrapper}>
              <h2 className={styles.readyToScan}>Ready to Scan</h2>
            </div>
            <div className={styles.maskGroupWrapper}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group1@2x.png"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.holdYourDeviceNearTheNfcWrapper}>
                <div className={styles.holdYourDevice}>
                  Hold your device near the NFC tag.
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameChild2} />
                <div className={styles.cancel}>Cancel</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img
              className={styles.groupIcon}
              alt=""
              src="/group-176573@2x.png"
            />
            <div className={styles.frameWrapper}>
              <img
                className={styles.frameChild3}
                alt=""
                src="/group-176523.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteJodETag;
