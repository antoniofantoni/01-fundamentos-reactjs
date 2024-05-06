import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.png";
console.log(igniteLogo);

export function Header() {
  return (
    <div>
      <header className={styles.header}>
				        <img src={igniteLogo} alt="Logotipo do ignite" />
				<strong>Ignite feed</strong>
			
      </header>
    </div>
  );
}


