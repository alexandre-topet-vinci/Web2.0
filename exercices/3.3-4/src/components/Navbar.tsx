import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavBarProps {
  theme: string;
  toggleTheme: () => void;
}

const NavBar = ({ theme, toggleTheme }: NavBarProps) => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/cinemas">Cinemas</Link>
    <Link to="/movie-list">My favorite movies</Link>
    <Link to="/add-movie">Add a movie</Link>
    <button onClick={toggleTheme} className="theme-button">
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>)
  </nav>
);

export default NavBar;
