import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Layout() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    // Check if device is touch capable to hide custom cursor
    const isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    
    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove);
      
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('button') || target.closest('a')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };
      window.addEventListener('mouseover', handleMouseOver);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-bg-base">
      
      {/* Desktop Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference hidden md:block"
        animate={{
          x: mousePos.x - (isHovering ? 16 : 3),
          y: mousePos.y - (isHovering ? 16 : 3),
          width: isHovering ? 32 : 6,
          height: isHovering ? 32 : 6,
          backgroundColor: isHovering ? 'transparent' : '#D4882A',
          border: isHovering ? '1px solid #D4882A' : 'none'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      <Navbar />
      <main className="flex-1 w-full relative z-10 transition-opacity duration-300">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918501844456"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[9998] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_32px_rgba(37,211,102,0.55)] transition-all duration-300 group"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 relative z-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.002 2.667A13.203 13.203 0 0 0 2.87 16.48a13.1 13.1 0 0 0 1.878 6.727L2.667 29.333l6.333-2.04A13.2 13.2 0 0 0 16.002 29.4 13.2 13.2 0 0 0 29.335 16.2 13.2 13.2 0 0 0 16.002 2.667Zm0 24.066a10.53 10.53 0 0 1-5.657-1.64l-.4-.24-4.187 1.347 1.373-4.107-.267-.413A10.51 10.51 0 0 1 5.537 16.2a10.534 10.534 0 0 1 10.533-10.533A10.534 10.534 0 0 1 26.602 16.2a10.534 10.534 0 0 1-10.6 10.533Zm5.787-7.893c-.32-.16-1.867-.92-2.16-1.027-.293-.107-.507-.16-.72.16-.213.32-.827 1.027-1.013 1.24-.187.213-.373.24-.693.08-.32-.16-1.347-.493-2.567-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.527-.54-.72-.55-.187-.007-.4-.007-.613-.007a1.18 1.18 0 0 0-.853.4c-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.46 4.827.76.333 1.36.52 1.827.667.767.24 1.467.207 2.02.127.613-.093 1.867-.76 2.133-1.493.267-.733.267-1.36.187-1.493-.08-.133-.293-.213-.613-.373Z" fill="#fff"/>
        </svg>
      </a>
    </div>
  );
}
