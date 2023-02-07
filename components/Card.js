import styles from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card(props) {
  function imgLoader() {
    return props.imgLink;
  }

  return (
    <div className={styles.card}>
      <Link href={props.link}>
        <Image
          src={props.imgLink}
          loader={imgLoader}
          width={230}
          height={230}
          className={styles.mainImg}
          priority
          alt="Main Image"
        />
      </Link>

      <h2 className={styles.cardTitle}>
        <Link href={props.link}>{props.title}</Link>
      </h2>
      <div className={styles.authorBox}>
        <Image
          alt="Author Image"
          width={67}
          height={67}
          className={styles.authorImage}
          src={props.imgLink}
          loader={imgLoader}
        />
        <span className={styles.authorName}>{props.creator}</span>
      </div>
      <p className={styles.ptext}>{props.contentSnippet}</p>
      <span className={styles.footer}>Medium.com</span>
    </div>
  );
}

export default Card;
