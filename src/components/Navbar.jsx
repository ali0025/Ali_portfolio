import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="flex justify-center pt-6">
      <div className="bg-gray-200 dark:bg-[#1f1f1f] rounded-full px-6 py-2  flex gap-6 items-center text-base md:text-lg shadow-md">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`relative transition-colors duration-300 font-medium 
                ${isActive ? "text-[#8b5cf6]" : "text-gray-400"}
              `}
            >
              {item.name}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#8b5cf6]/0 via-[#8b5cf6]/40 to-[#8b5cf6]/0 dark:from-[#8b5cf6]/0 dark:via-[#8b5cf6]/40 dark:to-[#8b5cf6]/0 "></span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
