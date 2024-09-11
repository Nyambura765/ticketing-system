// src/components/Navbar.js
export default function Navbar() {
    return (
      <header className="header py-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            Favour <span className="text-green-700">Nyambura</span>
          </a>
          <nav className="navbar flex space-x-6 text-lg">
            <a href="#home" className="hover:text-green-700">Home</a>
            <a href="#about" className="hover:text-green-700">About Us</a>
            <a href="#events" className="hover:text-green-700">Events</a>
            <a href="#contact" className="hover:text-green-700">Contact Us</a>
          </nav>
        </div>
      </header>
    );
  }
  