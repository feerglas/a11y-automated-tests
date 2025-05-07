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

        <section>
          <h2>Lists</h2>
          <p>Error: Ensure that lists are structured correctly.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>

            {/* ERROR */}
            {/* <p>List item 4</p> */}
          </ul>
        </section>

        <section>
          <h2>Interactive controls nesting</h2>
          <p>Error: Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies.</p>

          <button>
            Some button text

            {/* ERROR */}
            {/* <a href="https://google.com">Some Link</a> */}
          </button>
        </section>

        <section>
          <h2>Roles</h2>
          <p>Error: Ensure all elements with a role attribute use a valid value.</p>
          {/* ERROR */}
          {/* <p role="foo"> */}

          <p role="alert">
            This text has an invalid role attribute
          </p>
        </section>

        <section>
          <h2>Color Contrast</h2>
          <p>Error: Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds.</p>

          {/* ERROR */}
          {/* <p style={{ color: '#A2A2A2'}}> */}

          <p>
            The color contrast of this text is too low
          </p>
        </section>


        <section>
          <h2>Form elements</h2>
          <p>Error: Ensure every form element has a label.</p>

          {/* ERROR */}
          {/* <label>Some label</label> */}

          <label htmlFor="form-elem">Some label</label>
          <input type="text" id="form-elem"/>
        </section>
      </main>
    </div>
  );
}
