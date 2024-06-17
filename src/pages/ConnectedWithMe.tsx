import { FunctionComponent, useCallback } from "react";
import YashBio from "../components/YashBio";
import styles from "./ConnectedWithMe.module.css";

const ConnectedWithMe: FunctionComponent = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Connected With me Manthan Shah" to the project
  }, []);

  return (
    <div className={styles.connectedWithMe}>
      <div className={styles.navbarTimeWrapper}>
        <div className={styles.navbarTime}>
          <a className={styles.time}>9:41</a>
          <div className={styles.navbarConnection}>
            <div className={styles.connectionIndicators}>
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
      <div className={styles.profiles}>
        <div className={styles.connectedProfile}>
          <b className={styles.connectedWithMe1}>Connected With me</b>
        </div>
        <img
          className={styles.profileIcon}
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
      </div>
      <div className={styles.connectedWithMeInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.searchIcon} alt="" src="/search-icon.svg" />
          <input
            className={styles.frameItem}
            placeholder="Search.."
            type="text"
          />
        </div>
      </div>
      <div className={styles.manthanProfile}>
        <div className={styles.maskGroupParent} onClick={onGroupContainerClick}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.manthanDetails}>
            <div className={styles.manthanBio}>
              <b className={styles.manthanShah}>Manthan Shah</b>
              <div className={styles.hiIAm}>
                Hi. I am Manthan full stack developer
              </div>
              <div className={styles.friday1210}>Friday, 12/10</div>
            </div>
          </div>
        </div>
        <div className={styles.nehaProfile}>
          <div className={styles.frameParent} onClick={onGroupContainerClick}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-176745.svg"
            />
            <div className={styles.nehaDetails}>
              <div className={styles.nehaBio}>
                <b className={styles.nehaPrajapati}>Neha Prajapati</b>
                <div className={styles.hiIAm1}>
                  Hi. I am full stack developer
                </div>
                <div className={styles.friday12101}>Friday, 12/10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.yashProfile}>
        <YashBio />
      </div>
      <div className={styles.kishanProfile}>
        <div className={styles.kishanBio}>
          <b className={styles.kishanMangukiya}>Kishan Mangukiya</b>
          <div className={styles.uiuxDesignerAnd}>
            ui/ux designer and graphic designer
          </div>
          <div className={styles.friday12102}>Friday, 12/10</div>
        </div>
      </div>
      <section className={styles.emptyProfiles}>
        <img
          className={styles.emptyProfilesChild}
          alt=""
          src="/group-176573@2x.png"
        />
        <img
          className={styles.emptyProfilesItem}
          loading="lazy"
          alt=""
          src="/group-176523.svg"
        />
      </section>
    </div>
  );
};

export default ConnectedWithMe;
