import Link from "next/link";
import { useState } from "react";

export default function SideNav() {
  var [state, setState] = useState("inactive");
  return (
    <>
      <aside className={`sideNav ${state}`}>
        {state == "active" ? (
          <>
            <img src="/banner.png" className="banner" alt="lolinck banner" />
            <div className="sideNav_close" onClick={() => setState("inactive")}>
              <button>
                <i className="fas fa-chevron-left"></i>
              </button>
            </div>
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
                    <Link href="/premium">
                      <a className="sideNav_link">Premium</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/changelog">
                      <a className="sideNav_link">Changelog</a>
                    </Link>
                  </li>
                </ul>
              </section>
              <section className="sideNav_samples">
                <Link href="/samples">
                  <h4>Samples</h4>
                </Link>
                <ul>
                  <li>
                    <Link href="/samples#bash">
                      <a className="sideNav_link">Bash</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/samples#c">
                      <a className="sideNav_link">C</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#cpp">
                      <a className="sideNav_link">C++</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#dart">
                      <a className="sideNav_link">Dart</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#golang">
                      <a className="sideNav_link">Go</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#java">
                      <a className="sideNav_link">Java</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#javascript-option-1">
                      <a className="sideNav_link">JavaScript</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#php">
                      <a className="sideNav_link">PHP</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#python-option-1">
                      <a className="sideNav_link">Python</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#ruby">
                      <a className="sideNav_link">Ruby</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#rust">
                      <a className="sideNav_link">Rust</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/samples#typescript">
                      <a className="sideNav_link">TypeScript</a>
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </>
        ) : (
          <div className="sideNav_open" onClick={() => setState("active")}>
            <button>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
