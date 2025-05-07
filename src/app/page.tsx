import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Automated a11y testing with Playwright</h1>
        <p>Some sample scenarios for automated a11y E2E testing using Playwright.</p>

        <h2>Lists</h2>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </main>
    </div>
  );
}
