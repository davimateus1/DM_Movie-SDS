import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="dm-movie_nav_content">
          <Link to="/">
            <h1>DM Movie</h1>
          </Link>
          <a
            href="https://github.com/davimateus1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dm-movie_contact_container">
              <BsGithub />
              <p className="dm-movie_contact_link">/davimateus1</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
