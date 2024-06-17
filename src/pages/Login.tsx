import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <header className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/group-176697.svg"
            onClick={onGroupClick}
          />
          <img className={styles.groupIcon} alt="" src="/group-176686.svg" />
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </div>
        <div className={styles.sideBar}>
          <div className={styles.timeParent}>
            <a className={styles.time}>9:41</a>
            <div className={styles.statusBar}>
              <div className={styles.statusIcons}>
                <img
                  className={styles.combinedShapeIcon}
                  alt=""
                  src="/combined-shape1.svg"
                />
                <img className={styles.wiFiIcon} alt="" src="/wifi1.svg" />
                <img
                  className={styles.batteryIcon}
                  alt=""
                  src="/battery1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.sideLogo}>
            <img
              className={styles.logoIcon1}
              loading="lazy"
              alt=""
              src="/logo-1.svg"
            />
          </div>
        </div>
      </header>
      <section className={styles.mainContent}>
        <div className={styles.enter4DigitCodeToConfirmParent}>
          <h3 className={styles.enter4Digit}>
            Enter 4 digit code to confirm it’s you
          </h3>
          <div className={styles.resendButtonWrapper}>
            <div className={styles.resendButton}>
              <div className={styles.resendOtp}>Resend OTP</div>
              <div className={styles.verifyButton}>
                <h3 className={styles.verify}>Verify</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.bottomArt}>
        <div className={styles.bottomArtChild} />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/group-176523.svg"
        />
      </div>
      <div className={styles.inputArea}>
        <div className={styles.inputFields}>
          <div className={styles.inputBoxes} />
          <div className={styles.inputBoxes1} />
          <div className={styles.inputBoxes2} />
        </div>
      </div>
    </div>
  );
};

export default Login;
