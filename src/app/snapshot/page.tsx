import Link from "next/link";
export default function A11yTree() {
  return (
    <div data-testid="main">
      <nav>
        <Link href='/'>Home</Link>
      </nav>
      <main>
        <h1>Accessibility Tree Snapshot Testing</h1>
        <p>See <a href="https://playwright.dev/docs/aria-snapshots">https://playwright.dev/docs/aria-snapshots</a> for more information.</p>

        <section>
          <h2>A list</h2>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </section>

        <section>
          <h2>Form elements</h2>
          <label htmlFor="form-elem">Some label</label>
          <input type="text" id="form-elem"/>
        </section>
      </main>
    </div>
  );
}
