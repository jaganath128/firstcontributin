import { FunctionComponent } from "react";
import styles from "./Login1.module.css";

export type Login1Type = {
  className?: string;
};

const Login1: FunctionComponent<Login1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.login, className].join(" ")}>
      <header className={styles.loginInner}>
        <div className={styles.frameParent}>
          <div className={styles.timeParent}>
            <a className={styles.time}>9:41</a>
            <div className={styles.frameWrapper}>
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
          <div className={styles.logoWrapper}>
            <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
          </div>
        </div>
      </header>
      <section className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.logInSignUpToAccessYourWrapper}>
            <div className={styles.logInSign}>
              Log in Sign up to access your account
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <footer className={styles.frameChild} />
            <input
              className={styles.placeholder}
              placeholder="+91"
              type="text"
            />
            <div className={styles.frameDiv}>
              <img
                className={styles.frameItem}
                alt=""
                src="/group-177294.svg"
              />
              <img
                className={styles.frameInner}
                alt=""
                src="/group-177224@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.buttonIconParent}>
            <img
              className={styles.buttonIcon}
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
            <div className={styles.frameWrapper2}>
              <div className={styles.buttonBackgroundParent}>
                <div className={styles.buttonBackground} />
                <button className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.continue}>Continue</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dividerWrapper}>
          <img
            className={styles.dividerIcon}
            loading="lazy"
            alt=""
            src="/group-176523.svg"
          />
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent2}>
              <div className={styles.socialButtonParent}>
                <div className={styles.socialButton} />
                <div className={styles.socialButton1} />
              </div>
              <div className={styles.socialButton2} />
            </div>
          </div>
          <div className={styles.separator} />
        </div>
      </section>
    </div>
  );
};

export default Login1;
