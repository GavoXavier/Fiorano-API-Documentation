import { Link } from "react-router-dom";

export const NavigationButtons = ({ previous, next }) => {
  return (
    <div className="flex justify-between mt-8">
      {previous && (
        <Link
          to={previous.to}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          &larr; {previous.label}
        </Link>
      )}
      {next && (
        <Link
          to={next.to}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {next.label} &rarr;
        </Link>
      )}
    </div>
  );
};
