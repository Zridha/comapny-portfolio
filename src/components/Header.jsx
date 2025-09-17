import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            {/* LOGO */}
            <h1 className="text-3xl ms:text-4xl lg:text-5xl font-light m-0 font-serif">
                <Link to="/">Ridhaaazzz</Link>
            </h1>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-base tracking-wider transition-colors hover:text-gray-300">
                    Home
                </Link>
                <Link to="/services" className="text-base tracking-wider transition-colors hover:text-gray-300">
                    Services
                </Link>
                <Link to="/about" className="text-base tracking-wider transition-colors hover:text-gray-300">
                    About
                </Link>
                <Link to="/contact" className="text-base tracking-wider transition-colors hover:text-gray-300">
                    Contact
                </Link>
            </nav>

            {/* HAMBURGER MENU BUTTONS & CTA */}
            <div className="flex items-center gap-4">
                {/* UPDATED: This is now an <a> tag to link to your scheduling service */}
                <a 
                    href="YOUR_SCHEDULING_LINK_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white cursor-pointer"
                >
                    Schedule call
                </a>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden text-3xl p-2 z-50'>
                    <i className="bx bx-menu"></i>
                </button>
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
                <div id='mobileMenu' className='fixed top-0 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center'>
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-4xl">
                        <i className='bx bx-x'></i>
                    </button>
                    <nav className="flex flex-col gap-8 items-center text-xl">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className="tracking-wider transition-colors hover:text-gray-300">
                            Home
                        </Link>
                        <Link to="/services" onClick={() => setIsMenuOpen(false)} className="tracking-wider transition-colors hover:text-gray-300">
                            Services
                        </Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="tracking-wider transition-colors hover:text-gray-300">
                            About
                        </Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="tracking-wider transition-colors hover:text-gray-300">
                            Contact
                        </Link>
                        {/* UPDATED: This now links to your scheduling service */}
                        <a 
                            href="YOUR_SCHEDULING_LINK_HERE"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)} 
                            className="mt-4 bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium"
                        >
                            Schedule call
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;