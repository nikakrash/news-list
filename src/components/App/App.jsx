import NewsList from "../ArticleList/ArticleList";
import styles from './App.module.css';

const App = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Новости</h1>
      <NewsList />
    </section>
  );
}

export default App;
