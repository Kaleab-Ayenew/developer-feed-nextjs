import styles from "../styles/Home.module.css";

import googleImg from "../assets/google.jpg";

import Image from "next/image";

function Card(props) {
  return (
    <div className={styles.card}>
      <Image
        src={googleImg}
        width={230}
        height={230}
        className={styles.mainImg}
        priority
      />
      <h2 className={styles.cardTitle}>
        Why the Google layoffs are about personal ambition and poor leadership
      </h2>
      <div className={styles.authorBox}>
        <Image
          src={
            "https://miro.medium.com/fit/c/96/96/2*2VNiy9rN5BcvIzACfCmSww.jpeg"
          }
          width={67}
          height={67}
          className={styles.authorImage}
        />
        <span className={styles.authorName}>John Doe</span>
      </div>
      <p className={styles.ptext}>
        Recently, Google announced it was laying off approximately 6% of its
        workforce (or 12,000 people). This brings it in line with most of the
        rest of the tech industry.
      </p>
      <span className={styles.footer}>Medium.com</span>
    </div>
  );
}

export default Card;
