import { NavigationButtons } from "../components/NavigationButtons";

export const SampleSearchData = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">
        Sample Search Data
      </h1>

      <h2 className="text-2xl font-semibold mt-4">A) Consumer Report</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Sample consumer report data...
      </p>

      <h2 className="text-2xl font-semibold mt-4">B) Corporate Report</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Sample corporate report data...
      </p>

      <NavigationButtons
        previous={{ to: "/operation-apis", label: "Operation APIs" }}
      />
    </div>
  );
};
