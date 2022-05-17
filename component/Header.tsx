import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-md justify-content-start justify-content-md-between">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="material-icons">menu</i>
        </button>

        <a className="navbar-brand" href="">
          <Image
            src="/assets/flutter-lockup.png"
            alt="Flutter logo"
            height="37"
            width="129"
            className="align-middle"
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
