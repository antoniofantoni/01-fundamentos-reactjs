import styles from "./Post.module.css";
import fotoAntonio from "..//assets/foto-antonio.png";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={fotoAntonio} />
          <div className={styles.authorInfo}>
            <strong>Antonio Fantoni</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time dateTime=""></time>
      </header>
    </article>
  );
}
