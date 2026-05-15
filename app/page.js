import styles from "./page.module.css";
import Sec1 from "./section/sec1";
export default function Home() {
  return (
    <main className={styles.main}>
      <Sec1 />
    </main>
  );
}
