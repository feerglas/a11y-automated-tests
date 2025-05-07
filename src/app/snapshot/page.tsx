import Link from "next/link";
export default function A11yTree() {
  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
      </nav>
      <main>
        <h1>Accessibility Tree Snapshot Testing</h1>
        <p>See <a href="https://playwright.dev/docs/aria-snapshots">https://playwright.dev/docs/aria-snapshots</a> for more information.</p>
      </main>
    </div>
  );
}
