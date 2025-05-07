import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Automated a11y testing with Playwright</h1>
        <p>Some sample scenarios for automated a11y E2E testing using Playwright.</p>

        <h2>AXE</h2>
        <p>Some tests using the AXE tool: <Link href='/axe'>AXE Tests</Link>.</p>

        <h2>Snapshot testing</h2>
        <p>Some tests asserting on the accessibility tree: <Link href='/snapshot'>Snapshots on accessibility tree</Link></p>
      </main>
    </div>
  );
}
