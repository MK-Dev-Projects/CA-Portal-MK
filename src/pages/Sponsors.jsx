import styles from "../css/sponsor.module.css";
import data from "../data";

const Sponsors = () => {
  return (
    <div className={styles.sponsors} id="sponsors">
      <h1>SPONSORS</h1>

      <h2>Campus Outreach Partner</h2>
      <div>
        {data.sponsorsDB1.map((item) => (
          <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
            <img src={item.img} alt="pic" />
          </a>
        ))}
      </div>

      <h2>Goodies Partner</h2>
      <div>
        {data.sponsorsDB2.map((item) => (
          <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
            <img src={item.img} alt="pic" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
