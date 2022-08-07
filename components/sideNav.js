import Link from "next/link";

export default function SideNav() {
  return (
    <>
      <aside className="sideNav">
        <ul className="sideNav_links">
          <li>
            <a href="https://github.com/L" className="sideNav_link">
              Github <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </li>
          <li>
            <a href="https://dsc.gg/loick" className="sideNav_link">
              Discord <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </li>
        </ul>
        <div className="sideNav_docs">
          <section>
            <h4>Home</h4>
            <ul>
              <li>
                <Link href="/">
                  <a className="sideNav_link">Introduction</a>
                </Link>
              </li>
              <li>
                <Link href="/changelog">
                  <a className="sideNav_link">Updates</a>
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h4>Samples</h4>
            <ul>
              <li>
                <Link href="/samples/c">
                  <a className="sideNav_link">c</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/cpp">
                  <a className="sideNav_link">C++</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/golang">
                  <a className="sideNav_link">Go</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/java">
                  <a className="sideNav_link">Java</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/javascript">
                  <a className="sideNav_link">JavaScript</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/php">
                  <a className="sideNav_link">PHP</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/python">
                  <a className="sideNav_link">Python</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/ruby">
                  <a className="sideNav_link">Ruby</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/rust">
                  <a className="sideNav_link">Rust</a>
                </Link>
              </li>
              <li>
                <Link href="/samples/typescript">
                  <a className="sideNav_link">TypeScript</a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </aside>
    </>
  );
}
