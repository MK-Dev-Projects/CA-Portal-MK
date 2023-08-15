import styles from "../css/contactus.module.css";
import { ContactCard } from "../components";
import data from "../data";

const ContactUs = () => {
  return (
    <div className={styles.contact} id="contacts">
      <h1>CONTACT US</h1>
      <div className={styles.cardsContainer}>
        {data.contactsDB.map((contact) => {
          return <ContactCard key={contact.id} contact={contact} />;
        })}
      </div>
    </div>
  );
};

export default ContactUs;
