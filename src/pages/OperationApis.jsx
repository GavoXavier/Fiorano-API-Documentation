import { Link, useParams } from "react-router-dom";
import { productsData } from "../data/productsData"; // A mock data file for products

export const OperationApis = () => {
  const { productId } = useParams(); // Get the current product from the URL
  const productIndex = productsData.findIndex((item) => item.id === productId);
  const product = productsData[productIndex];

  // Get Previous and Next products
  const previousProduct = productsData[productIndex - 1];
  const nextProduct = productsData[productIndex + 1];

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">
        Operation APIs
      </h1>

      {/* Render all product cards if no specific product is selected */}
      {!productId && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((item) => (
            <Link
              key={item.id}
              to={`/operation-apis/${item.id}`}
              className="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {item.description}
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </Link>
          ))}
        </div>
      )}

      {/* Render a specific product if productId is selected */}
      {product && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {product.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{product.description}</p>

          {/* Table for Product Details */}
          <table className="min-w-full table-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-600 text-left">
                <th className="px-4 py-2 text-gray-700 dark:text-gray-200">Attribute</th>
                <th className="px-4 py-2 text-gray-700 dark:text-gray-200">Value</th>
              </tr>
            </thead>
            <tbody>
              {product.details.map((detail, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-400">
                    {detail.attribute}
                  </td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-300">
                    {detail.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {previousProduct ? (
              <Link
                to={`/operation-apis/${previousProduct.id}`}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                &larr; {previousProduct.name}
              </Link>
            ) : (
              <div /> // Placeholder to keep buttons aligned
            )}
            {nextProduct ? (
              <Link
                to={`/operation-apis/${nextProduct.id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {nextProduct.name} &rarr;
              </Link>
            ) : (
              <div /> // Placeholder to keep buttons aligned
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OperationApis;
