import { NavLink } from "react-router-dom";
import navLinks from "../../../data/navLinks";
import { useLocation } from "react-router-dom";
export default function NavMenu() {
  const location = useLocation();
  return (
    <div className="hidden lg:flex items-center gap-4">
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.path} className="flex items-center">
            <NavLink
              to={link.path}
              className={`border-b font-sans text-[18px] leading-[26px] text-[#000] font-normal
                ${location.pathname === link.path ? "border-black" : "border-transparent"}
                `}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}