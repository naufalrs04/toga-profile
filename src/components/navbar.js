import React, { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation click
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    closeMobileMenu();
  };

  const plants = [
    { name: "Jahe", slug: "jahe" },
    { name: "Kunyit", slug: "kunyit" },
    { name: "Temulawak", slug: "temulawak" },
    { name: "Kencur", slug: "kencur" },
    { name: "Lengkuas", slug: "lengkuas" },
    { name: "Lidah Buaya", slug: "lidah-buaya" },
    { name: "Kumis Kucing", slug: "kumis-kucing" },
    { name: "Sambiloto", slug: "sambiloto" },
    { name: "Pegagan", slug: "pegagan" },
    { name: "Mengkudu", slug: "mengkudu" }
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-3 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <h1 
            className="text-2xl font-bold text-green-600 cursor-pointer"
            onClick={(e) => handleNavClick(e, 'beranda')}
          >
            🌿 TOGARDEN
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, 'beranda')}
            className="rounded-full px-4 py-2 text-gray-600 hover:text-white hover:bg-green-600 transition-colors cursor-pointer"
          >
            Beranda
          </a>

          <a
            href="#jenis-tanaman"
            onClick={(e) => handleNavClick(e, 'jenis-tanaman')}
            className="rounded-full px-4 py-2 text-gray-600 hover:text-white hover:bg-green-600 transition-colors cursor-pointer"
          >
            Jenis Tanaman
          </a>

          <a
            href="#manfaat"
            onClick={(e) => handleNavClick(e, 'manfaat')}
            className="rounded-full px-4 py-2 text-gray-600 hover:text-white hover:bg-green-600 transition-colors cursor-pointer"
          >
            Manfaat
          </a>

          <a
            href="#cara-merawat"
            onClick={(e) => handleNavClick(e, 'cara-merawat')}
            className="rounded-full px-4 py-2 text-gray-600 hover:text-white hover:bg-green-600 transition-colors cursor-pointer"
          >
            Cara Merawat
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden z-50 relative p-2 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-0.5"
                  : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-0.5"
                  : "translate-y-1"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="flex flex-col h-full pt-16">
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, 'beranda')}
            className="block px-6 py-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100 cursor-pointer"
          >
            Beranda
          </a>
          <a
            href="#jenis-tanaman"
            onClick={(e) => handleNavClick(e, 'jenis-tanaman')}
            className="block px-6 py-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100 cursor-pointer"
          >
            Jenis Tanaman
          </a>
          <a
            href="#manfaat"
            onClick={(e) => handleNavClick(e, 'manfaat')}
            className="block px-6 py-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100 cursor-pointer"
          >
            Manfaat
          </a>
          <a
            href="#cara-merawat"
            onClick={(e) => handleNavClick(e, 'cara-merawat')}
            className="block px-6 py-4 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100 cursor-pointer"
          >
            Cara Merawat
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;