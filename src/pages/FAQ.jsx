import styles from "../css/faq.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import data from "../data";

const FAQ = () => {
  return (
    <div className={styles.faq} id="faq">
      <h1>FAQs</h1>

      <Accordion allowZeroExpanded className={styles.comprules}>
        {data.faqDB.map((faq, i) => {
          return (
            <AccordionItem key={i + 1}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.rulebutton}>
                  {">"} {faq.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQ;
