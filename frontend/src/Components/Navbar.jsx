import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Button color classes for "Generate" button
  const btnClass = 
    "bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition";

  return (
    <nav className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-[9vh] fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl cursor-pointer">
            Hassan.AI
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { label: "Home", to: "home" },
              { label: "Features", to: "features" },
              { label: "How It Works", to: "howitworks" },
              { label: "Pricing", to: "pricing" },
              { label: "Testimonials", to: "testimonials" },
              { label: "FAQs", to: "faqs" },
             
            ].map(({ label, to }) => (
             <ScrollLink
  key={to}
  to={to}
  smooth={true}
  duration={500}
  offset={-70}
  spy={true}
  activeClass="text-blue-400"
  className="group relative cursor-pointer text-white transition duration-300 ease-in-out"
>
  {label}
  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_10px_#60A5FA]"></span>
</ScrollLink>

            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ScrollLink
              to="generate"
              smooth={true}
              duration={500}
              offset={-70}
              className={`${btnClass} cursor-pointer`}
            >
              Generate
            </ScrollLink>
            <a
              href="#"
              className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 pt-2 pb-6 space-y-4">
          {[
            { label: "Home", to: "home" },
            { label: "Features", to: "features" },
            { label: "How It Works", to: "howitworks" },
            { label: "Pricing", to: "pricing" },
            { label: "Testimonials", to: "testimonials" },
            { label: "FAQs", to: "faqs" },
            { label: "Generate", to: "generate" },
          ].map(({ label, to }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMobileMenuOpen(false)} // Close menu on click
              className="block py-2 hover:text-gray-300 font-semibold cursor-pointer"
              spy={true}
              activeClass="text-blue-400"
            >
              {label}
            </ScrollLink>
          ))}

          <a
            href="#"
            className="block bg-white text-gray-900 px-4 py-2 rounded font-semibold text-center hover:bg-gray-200 transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
