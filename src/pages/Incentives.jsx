import styles from "../css/incentives.module.css";
import { MkCard } from "../components";
import images from "../assets";
import data from "../data";

const Incentives = () => {
  return (
    <div className={styles.container} id="incentives">
      <h1>INCENTIVES</h1>
      <img src={images.incentivePic} alt="Pic" />
      <div className={styles.cardContainer}>
        {data.incentivesDB.map((item) => {
          return <MkCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Incentives;
