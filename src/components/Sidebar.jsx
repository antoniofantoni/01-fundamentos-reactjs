import styles from "./Sidebar.module.css";
import fotoAntonio from '..//assets/foto-antonio.png'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
			className={styles.cover}
			src="https://images.unsplash.com/photo-1453060113865-968cea1ad53a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

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
