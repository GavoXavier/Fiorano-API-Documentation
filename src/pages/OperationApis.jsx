import { useParams } from "react-router-dom";
import { productsData } from "../data/productsData"; // A mock data file for products

export const OperationApis = () => {
  const { productId } = useParams(); // Get the current product from the URL
  const product = productsData.find((item) => item.id === productId);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">
        {product ? product.name : "Product Details"}
      </h1>

      {/* Product Card with Table-like Design */}
      {product && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            {product.name}
          </h2>
          
          <table className="min-w-full table-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg mb-4">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-600 text-left">
                <th className="px-4 py-2 text-gray-700 dark:text-gray-200">Attribute</th>
                <th className="px-4 py-2 text-gray-700 dark:text-gray-200">Value</th>
              </tr>
            </thead>
            <tbody>
              {product.details.map((detail, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-400">{detail.attribute}</td>
                  <td className="px-4 py-2 text-gray-600 dark:text-gray-300">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OperationApis;
