import { Post } from "./Post";
import { Header } from "./components/Header";

import "../src/global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Antonio Fantoni"
            content="Lorem ipsdo, sit amet consectetur  elSu,xime."
          />

          <Post author="Jorge Amado" content="Lorem ipsum dolor, sit." />
        </main>
      </div>
    </div>
  );
}
