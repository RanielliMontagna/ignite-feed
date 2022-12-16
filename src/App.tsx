import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { SideBar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";
import { posts } from "./components/Post/Post.static";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
