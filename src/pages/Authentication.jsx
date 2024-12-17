import { NavigationButtons } from "../components/NavigationButtons";

export const Authentication = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">
        Authentication Connection
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        To connect to the TransUnion API, an authentication token is required. Below are the integration details:
      </p>

      {/* Table for Authentication Details */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-left">
              <th className="px-4 py-2 text-gray-700 dark:text-gray-200">Attribute</th>
              <th className="px-4 py-2 text-gray-700 dark:text-gray-200">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-400">URL</td>
              <td className="px-4 py-2 text-gray-600 dark:text-gray-300">https://10.137.164.61:2284/accesstoken/</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-400">Request Type</td>
              <td className="px-4 py-2 text-gray-600 dark:text-gray-300">POST</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-400">Authentication Type</td>
              <td className="px-4 py-2 text-gray-600 dark:text-gray-300">Bearer</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-400">Request Body</td>
              <td className="px-4 py-2 text-gray-600 dark:text-gray-300">
                <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm">
                  client_id: *provided separately*<br />
                  client_secret: *provided separately*<br />
                  grant_type: client_credentials
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Navigation Buttons */}
      <NavigationButtons
        previous={{ to: "/introduction", label: "Introduction" }}
        next={{ to: "/operation-apis", label: "Operation APIs" }}
      />
    </div>
  );
};
