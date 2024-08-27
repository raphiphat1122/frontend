import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/CMTC.png" alt="..." width={197} height={40} className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles.navLinkButton}`}
                  aria-current="page"
                  href="/"
                >Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLinkButton}`} href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLinkButton}`} href="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLinkButton}`} href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link href="/signup" className="btn btn-outline-dark mx-2" type="submit">SignUp</Link>
              <Link href="/signin" className="btn btn-outline-dark" type="submit">SignIn</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
