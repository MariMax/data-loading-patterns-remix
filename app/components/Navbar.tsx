import { NavLink } from "@remix-run/react";

export const Navbar = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) => {
    const defaultState = "block px-4 py-2 rounded-md text-white hover:bg-gray-700 font-medium";
    return isActive ? `${defaultState} bg-gray-700` : defaultState;
  }
  return (
    <nav className="top-0 left-0 w-64 h-full bg-gray-800 text-white flex flex-col">
      {/* Navigation Links */}
      <ul className="mt-4 space-y-2">
        <li>
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={linkStyle} prefetch="render">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};