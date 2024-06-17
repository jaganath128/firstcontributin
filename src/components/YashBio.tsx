import { FunctionComponent } from "react";
import styles from "./YashBio.module.css";

export type YashBioType = {
  className?: string;
};

const YashBio: FunctionComponent<YashBioType> = ({ className = "" }) => {
  return (
    <div className={[styles.yashBio, className].join(" ")}>
      <div className={styles.yashDetails}>
        <img
          className={styles.yashDetailsChild}
          loading="lazy"
          alt=""
          src="/group-176745.svg"
        />
        <b className={styles.yashParekh}>Yash parekh</b>
      </div>
      <div className={styles.logicalLoopAnd}>
        logical loop and jod-e co fundore
      </div>
      <div className={styles.friday1210}>Friday, 12/10</div>
    </div>
  );
};

export default YashBio;
