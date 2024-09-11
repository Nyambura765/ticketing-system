import Layout from './layout';
import About from './about';
import Events from './events';
import Contact from './contact';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Importing icons

export default function Home() {
  return (
    <Layout>
      <header className="header bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          <a href="#home" className="logo text-2xl font-bold text-green-600">
            Favour <span className="text-green-700">Holdings</span>
          </a>
          <nav className="navbar flex space-x-4">
            <a
              href="#home"
              className="text-green-600 bg-white border border-green-600 hover:bg-green-600 hover:text-white py-2 px-4 rounded-md transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-green-600 bg-white border border-green-600 hover:bg-green-600 hover:text-white py-2 px-4 rounded-md transition duration-300"
            >
              About Us
            </a>
            <a
              href="#events"
              className="text-green-600 bg-white border border-green-600 hover:bg-green-600 hover:text-white py-2 px-4 rounded-md transition duration-300"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-green-600 bg-white border border-green-600 hover:bg-green-600 hover:text-white py-2 px-4 rounded-md transition duration-300"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Background Section */}
      <section
        className="home relative flex items-center justify-center h-screen bg-gray-100"
        id="home"
        style={{
          backgroundImage: "url('/images/home.jpg')",
          backgroundSize:  'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.65)', // Adjusted brightness for better text visibility
          minHeight: '150vh', // Ensure the section covers the full viewport height
          paddingTop: '40vh', // Add top padding to give space for the content
          paddingBottom: '40vh', // Add bottom padding to extend the section height
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Women in Tech Forums</h1>
          <p className="text-lg mb-8">Empowering women with opportunities and knowledge.</p>

          {/* Authentication Form */}
          <div className="relative z-20 bg-white bg-opacity-90 p-6 rounded-md text-gray-800 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
            <form>
              <div className="mb-4">
                <label className="block text-left mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-600"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 flex items-center">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <div className="mt-6 space-y-4">
              <button
                className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-md"
              >
                <FaGoogle className="mr-2" />
                Sign in with Google
              </button>
              <button
                className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-md"
              >
                <FaApple className="mr-2" />
                Sign in with Apple
              </button>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Events />
      <Contact />

      <footer className="footer py-6 bg-gray-800 text-white mt-10">
        <div className="container mx-auto text-center">
          <h2 className="text-xl">Contact Us</h2>
          <p>Email: nyamburafavour765@gmail.com | Phone: +254 797599257</p>
          <div className="social mt-4">
            <a href="#" className="text-white text-xl mx-2"><i className="bx bxl-github"></i></a>
            <a href="#" className="text-white text-xl mx-2"><i className="bx bxl-instagram-alt"></i></a>
            <a href="#" className="text-white text-xl mx-2"><i className="bx bxl-linkedin"></i></a>
            <a href="#" className="text-white text-xl mx-2"><i className="bx bxl-twitter"></i></a>
          </div>
          <ul className="list mt-4 flex justify-center space-x-4">
            <li><a href="#" className="text-white hover:text-green-600">FAQs</a></li>
            <li><a href="#" className="text-white hover:text-green-600">Services</a></li>
            <li><a href="#" className="text-white hover:text-green-600">About Us</a></li>
            <li><a href="#" className="text-white hover:text-green-600">Contact Us</a></li>
            <li><a href="#" className="text-white hover:text-green-600">Privacy Policy</a></li>
          </ul>
          <p className="copyright mt-4">
            © Favour Holdings | All Rights Reserved
          </p>
        </div>
      </footer>
    </Layout>
  );
}
