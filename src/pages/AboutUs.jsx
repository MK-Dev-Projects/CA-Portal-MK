import styles from "../css/aboutus.module.css";
import aboutUs from "../assets/aboutUs.png";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs} id="about">
      <h1>ABOUT US</h1>
      <div className={styles.aboutusContent}>
        <p>
          Initiated in 1965, Antaragni has emerged as the biggest college based
          fiesta in North India and as one of the most awaited and anticipated
          cultural event of the country. With it’s exciting competitions,
          splendid performances and glamorous pro-nites, Antaragni is one of the
          largest cultural festival inviting a crowd of over 1.5 Lakh students
          from 350 different colleges. Over the 56 years, Antaragni has seen
          many outstanding talents and a lot of scintillating performances by
          the likes of KSHMR, Adnan Sami, Atif Aslam, Shankar-Ehsaan-Loy and
          many more. Let’s all get together and see what surprises Antaragni has
          up its sleeves this time.
        </p>
        <img src={aboutUs} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
