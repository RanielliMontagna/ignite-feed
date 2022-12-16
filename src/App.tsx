import "./global.css";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/post";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
