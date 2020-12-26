import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({text, href }) {
  const router = useRouter();
  const activeClass = href === router.pathname ? "active" : "";

  return (
    <Link href={href}>
      <a className={`navbar-item ${activeClass}`} rel="noopener noreferrer">
        {text}
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="section">
      <div className="container">
        <nav id="navigation" className="navbar is-dark" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/" style={{paddingTop: 0, paddingBottom: 0}}>
              <img src="images/projectplus_logo_small.png" style={{maxHeight: "2.5rem"}}/>
            </a>
            <a className="navbar-burger burger" role="button" aria-label="menu" aria-expanded="false" data-target="collapseNavbar">
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </a>
          </div>

          <div id="collapseNavbar" className="navbar-menu">
            <div className="navbar-start has-text-weight-bold">
              <NavLink text="Home" href="/"/>
              <NavLink text="F.A.Q." href="/faq"/>
              {/* <a className="navbar-item disabled" href="/">Changes</a> */}
              {/* <a className="navbar-item" href="/">Knuckles</a> */}
            </div>

            <div className="navbar-end has-text-weight-bold">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-link" href="/download">Download v2.2</a>
                  <a className="button is-info" href="/discord">Discord Server</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}