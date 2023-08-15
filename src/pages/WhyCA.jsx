import styles from "../css/incentives.module.css";
import { MkCard } from "../components";
import images from "../assets";
import data from "../data";

const WhyCA = () => {
  return (
    <div className={styles.container} id="whyca">
      <h1>WHY CAMPUS AMBASSADOR?</h1>
      <img src={images.whyCAPic} alt="Pic" />
      <div className={styles.cardContainer}>
        {data.whycaDB.map((item) => {
          return <MkCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default WhyCA;
