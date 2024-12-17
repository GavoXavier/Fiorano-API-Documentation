import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-6">
        Welcome to API Documentation
      </h1>

      {/* Buttons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {/* Authentication Button */}
       <Link to="/authentication">
          <button className="w-full bg-gray-300 text-gray-800 font-semibold py-4 rounded-lg shadow-md hover:bg-gray-400 transition">
            Authentication
          </button>
        </Link>
         {/* TransUnion Button */}
        <Link to="/introduction">
          <button className="w-full bg-blue-500 text-white font-semibold py-4 rounded-lg shadow-md hover:bg-blue-600 transition">
            TransUnion
          </button>
        </Link>

        
      </div>
    </div>
  );
};

export default Home;
