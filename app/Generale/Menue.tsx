import { NavLink } from "react-router";
import { useState } from "react";
import MenueButton from "~/utils/MenueButton";

function Menue() {
  const [open, setOpen] = useState(false);

  const activeStyle = "text-black border-b-2 border-black";
  const normalStyle =
    "text-black/50 hover:text-black transition-all duration-300 ease-in-out";

  return (
    <nav className="py-4 px-6 md:px-10 text-lg md:text-xl shadow-2xl shadow-black/5 font-medium bg-white/80 backdrop-blur-md sticky top-0 z-50">
      
      <div className="flex justify-between items-center">
        
        {/* Logo (optionnel) */}
        <h1 className="font-bold text-black">Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
            Work
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
            About
          </NavLink>

          <a href="/cv.pdf" download className={normalStyle}>
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MenueButton />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col gap-6 mt-6 transition-all duration-500 ${
          open ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) => isActive ? activeStyle : normalStyle}
        >
          Work
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setOpen(false)}
          className={({ isActive }) => isActive ? activeStyle : normalStyle}
        >
          About
        </NavLink>

        <a
          href="/cv.pdf"
          download
          onClick={() => setOpen(false)}
          className={normalStyle}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Menue;