import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "../src/global.css";
import styles from "./App.module.css";


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

         
        </main>
      </div>
    </div>
  );
}
