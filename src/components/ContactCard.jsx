import React from "react";
import styles from "../css/contactcard.module.css";
import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";

function ContactCard({ contact }) {
  const { Pic, Name, Post, Dept, Contact, Email, Facebook, LinkedIn } = contact;

  return (
    <div className={styles.card}>
      <img src={Pic} className={styles.profile} alt="organiser" />
      <h3 className={styles.profilename}>{Name}</h3>
      <br />
      <p className={styles.about}>
        {Post}
        <br />
        {Dept}
      </p>
      <br />

      <div className={styles.contactInfo}>
        <p>
          Mobile: <a href={`tel:${Contact}`}>{Contact}</a>
        </p>
        <p>
          Email: <a href={`mailto:${Email}`}>{Email}</a>
        </p>

        <div className={styles.socialLinks}>
          <a href={Facebook} target="_blank" rel="noreferrer">
            <GrFacebook />
          </a>
          <a href={LinkedIn} target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
