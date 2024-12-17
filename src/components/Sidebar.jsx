import { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

const Sidebar = () => {
  // State for managing dropdown visibility
  const [isTransUnionDropdownOpen, setIsTransUnionDropdownOpen] = useState(false);
  const [isOperationApisDropdownOpen, setIsOperationApisDropdownOpen] = useState(false);

  // Toggle dropdown menus
  const toggleTransUnionDropdown = () => {
    setIsTransUnionDropdownOpen(!isTransUnionDropdownOpen);
  };

  const toggleOperationApisDropdown = () => {
    setIsOperationApisDropdownOpen(!isOperationApisDropdownOpen);
  };

  return (
    <div className="w-64 h-screen bg-gray-200 dark:bg-gray-800 p-4 fixed">
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-6">Navigation</h2>

      <ul className="space-y-4">
        {/* Home Button */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-600 dark:text-gray-400 hover:underline"
            }
          >
            Home
          </NavLink>
        </li>

        {/* Authentication Button */}
        <li>
          <NavLink
            to="/authentication"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-gray-600 dark:text-gray-400 hover:underline"
            }
          >
            Authentication Connection
          </NavLink>
        </li>

        {/* TransUnion API Dropdown */}
        <li>
          <button
            onClick={toggleTransUnionDropdown}
            className="w-full text-left text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500"
          >
           <NavLink
                  to="/introduction"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-bold"
                      : "text-gray-600 dark:text-gray-400 hover:underline"
                  }
                >
                   TransUnion API 
                </NavLink>
          </button>

          {/* Dropdown menu for TransUnion */}
          {isTransUnionDropdownOpen && (
            <ul className="space-y-2 pl-4 mt-2">
              <li>
                <NavLink
                  to="/introduction"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-bold"
                      : "text-gray-600 dark:text-gray-400 hover:underline"
                  }
                >
                  Introduction
                </NavLink>
              </li>

              {/* Operation APIs dropdown as a subtopic */}
              <li>
                <button
                  onClick={toggleOperationApisDropdown}
                  className="w-full text-left text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500"
                >
                  Operation APIs
                </button>

                {isOperationApisDropdownOpen && (
                  <ul className="space-y-2 pl-4 mt-2">
                    <li>
                      <NavLink
                        to="/operation-apis/product126"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-600 dark:text-gray-400 hover:underline"
                        }
                      >
                        Product 126
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/operation-apis/product141"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-600 dark:text-gray-400 hover:underline"
                        }
                      >
                        Product 141
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/operation-apis/product152"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-600 dark:text-gray-400 hover:underline"
                        }
                      >
                        Product 152
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/operation-apis/product146"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-600 dark:text-gray-400 hover:underline"
                        }
                      >
                        Product 146
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/operation-apis/product139"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-600 dark:text-gray-400 hover:underline"
                        }
                      >
                        Product 139
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/operation-apis/product103"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-600 dark:text-gray-400 hover:underline"
                        }
                      >
                        Product 103
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/operation-apis/product163"
                        className={({ isActive }) =>
                          isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-600 dark:text-gray-400 hover:underline"
                        }
                      >
                        Product 163
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <NavLink
                  to="/sample-search-data"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-bold"
                      : "text-gray-600 dark:text-gray-400 hover:underline"
                  }
                >
                  Sample Search Data
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
