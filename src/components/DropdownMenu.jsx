import { NavLink } from "react-router-dom";
import { useState } from "react";

const DropdownMenu = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="pl-4 mt-2 space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-gray-600 dark:text-gray-400 hover:underline"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
