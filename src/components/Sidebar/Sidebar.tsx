import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Sidebar.module.css";

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1613921568536-555645be4032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ranimontagna.png" />

        <strong>Ranielli Montagna</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

export { SideBar };
