import styles from "../css/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header} id="home">
      <div className={styles.intro}>
        <div className={styles.heading}>Manthan-MK</div>
        <div className={styles.ca}>MK-MK</div>
        <div className={styles.para}>
          <span className={styles.paratext}>
            Come join us to experience this spectacular cultural festival of
            this season...
            <Link to="/login">
              <button className={styles.join}>JOIN NOW</button>
            </Link>
          </span>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.singleDiv}>
          <div className={styles.grad}>
            <div className={styles.text}>
              <span>70+</span>
            </div>
          </div>
          <div className={styles.name}>COMPETITIONS</div>
        </div>
        <div className={styles.singleDiv}>
          <div
            className={styles.grad}
            style={{ background: "linear-gradient(40deg, red, black)" }}
          >
            <div className={styles.text}>
              <span>350+</span>
            </div>
          </div>
          <div className={styles.name}>COLLEGES</div>
        </div>
        <div className={styles.singleDiv}>
          <div
            className={styles.grad}
            style={{ background: "linear-gradient(160deg, red, black)" }}
          >
            <div className={styles.text}>
              <span>10+</span>
            </div>
          </div>
          <div className={styles.name}>PROFESSIONAL SHOWS</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
