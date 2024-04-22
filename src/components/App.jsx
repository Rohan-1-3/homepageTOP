import Header from "./Header";
import styles from "../css/App.module.css"
import MyWork from "./MyWork";
import Footer from "./Footer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;