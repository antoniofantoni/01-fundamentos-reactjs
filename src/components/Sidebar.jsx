import styles from "./Sidebar.module.css";
import fotoAntonio from '..//assets/foto-antonio.png'
import foto from '../assets/foto.jpg'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
			className={styles.cover}
			src={foto} />

      <div className={styles.profile}>
				<img className={styles.avatar} src={fotoAntonio}></img>
        <strong>Antonio Fantoni</strong>
				<span>Web developer</span>
      </div>
			<footer>
				<a href="#">Editar seu perfil</a>
			</footer>
    </aside>
  );
}
