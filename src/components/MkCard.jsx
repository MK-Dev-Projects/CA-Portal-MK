import styles from "../css/mkCard.module.css";

const MkCard = ({ item }) => {
  const { img, title, desc } = item;
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={img} alt="png" />
        </div>
        <br />
        <div className={styles.text}>{title}</div>
      </div>
      <div className={styles.cardInner}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default MkCard;
