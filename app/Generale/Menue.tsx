import { NavLink } from "react-router";

function Menue() {
  // Style pour le lien actif
  const activeStyle = "text-black border-b-2 border-black";
  const normalStyle = "text-black/50 hover:text-black transition-all duration-300 ease-in-out";

  return (
    <nav className="py-6 px-10 h-max text-xl shadow-2xl shadow-black/5 font-medium flex gap-12 justify-end items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? activeStyle : normalStyle}
      >
        Work
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? activeStyle : normalStyle}
      >
        About
      </NavLink>

      <a href="/cv.pdf" download className={normalStyle}>
      
      
        Resume
      </a>
    </nav>
  );
}

export default Menue;