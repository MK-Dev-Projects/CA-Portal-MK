import styles from "../css/incentives.module.css";
import { MkCard } from "../components";
import images from "../assets";
import data from "../data";

const Expectation = () => {
  return (
    <div className={styles.container} id="responsibilities">
      <h1>WHAT WE EXPECT?</h1>
      <img className={styles.expectationImg} src={images.expectPic} alt="Pic" />
      <div className={styles.cardContainer}>
        {data.expectationDB.map((item) => {
          return <MkCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Expectation;
