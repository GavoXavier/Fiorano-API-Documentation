import { transunionData } from "../data/transunionData";
import CodeBlock from "../components/CodeBlock";

const TransUnion = () => {
  return (
    <div className="p-6">
      {/* Introduction */}
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">
        TransUnion API Documentation
      </h1>
      <section id="introduction" className="mb-8">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {transunionData.introduction}
        </p>
      </section>

      {/* Authentication */}
      <section id="authentication" className="mb-8">
        <h2 className="text-2xl font-semibold">1. Authentication Connection</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Use the following endpoint for authentication:
        </p>
        <CodeBlock language="json" code={JSON.stringify(transunionData.authentication, null, 2)} />
      </section>

      {/* Operation APIs */}
      <section id="operations" className="mb-8">
        <h2 className="text-2xl font-semibold">2. Operation APIs</h2>
        {transunionData.operationAPIs.map((api) => (
          <div key={api.id} id={api.id} className="mt-6">
            <h3 className="text-xl font-bold text-blue-600">{api.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <strong>Endpoint:</strong> {api.endpoint}
            </p>
          </div>
        ))}
      </section>

      {/* Sample Search Data */}
      <section id="sampleSearchData" className="mb-8">
        <h2 className="text-2xl font-semibold">3. Sample Search Data</h2>

        {/* Consumer Report */}
        <div id="consumerReport" className="mt-6">
          <h3 className="text-xl font-bold">A) Consumer Report</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {transunionData.sampleSearchData.consumerReport}
          </p>
        </div>

        {/* Corporate Report */}
        <div id="corporateReport" className="mt-6">
          <h3 className="text-xl font-bold">B) Corporate Report</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {transunionData.sampleSearchData.corporateReport}
          </p>
        </div>
      </section>
    </div>
  );
};

export default TransUnion;
