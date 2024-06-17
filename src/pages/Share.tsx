import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./Share.module.css";

const Share: FunctionComponent = () => {
  return (
    <div className={styles.share}>
      <FrameComponent />
      <div className={styles.profileInfoWrapper}>
        <div className={styles.profileInfo}>
          <div className={styles.appjodEcomviewprofilekish}>
            app.jod-e.com/viewprofile/kishan
          </div>
          <div className={styles.actionButtons}>
            <div className={styles.saveButtonContainer}>
              <div className={styles.saveAction}>
                <div className={styles.save}>Save</div>
              </div>
              <div className={styles.addToApple}>Add to Apple Wallet</div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.cancelButtonContainerParent}>
        <div className={styles.cancelButtonContainer}>
          <img
            className={styles.cancelButtonContainerChild}
            alt=""
            src="/group-1765731@2x.png"
          />
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.cancel}>Cancel</div>
          </button>
        </div>
        <footer className={styles.walletBackground} />
        <input className={styles.groupInput} type="checkbox" />
        <div className={styles.walletBackground1} />
        <img
          className={styles.walletAppIconIos121}
          loading="lazy"
          alt=""
          src="/wallet-app-icon-ios-12-1@2x.png"
        />
        <div className={styles.buttonBackground} />
        <img
          className={styles.confirmationIcon}
          loading="lazy"
          alt=""
          src="/group-176523.svg"
        />
      </section>
    </div>
  );
};

export default Share;
