import Link from "next/link";
export default function Axe() {
  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
      </nav>
      <main>
        <h1>AXE</h1>
        <p>See <a href="https://playwright.dev/docs/accessibility-testing">https://playwright.dev/docs/accessibility-testing</a> for more information.</p>
      </main>
    </div>
  );
}
