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

        <h2>Lists</h2>
        <p>Error: Ensure that lists are structured correctly.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>

          {/* ERROR */}
          {/* <p>List item 4</p> */}
        </ul>

        <h2>Interactive controls nesting</h2>
        <p>Error: Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies.</p>

        {/* ERROR */}
        {/* <button><a href="https://google.com">Some Link</a></button> */}
      </main>
    </div>
  );
}
