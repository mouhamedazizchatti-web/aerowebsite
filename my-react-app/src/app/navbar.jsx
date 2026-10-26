import logo from '../assets/logo.png';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Aerotronix Club Logo" className="logo-img" />
        <h2 className="logo">Aerotronix Club</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>Formation</li>
        <li>Events</li>
      </ul>

      <button onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;