import "./global.css";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main></main>
      </div>
    </div>
  );
}

export default App;
