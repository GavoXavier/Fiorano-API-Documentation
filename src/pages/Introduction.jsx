import { NavigationButtons } from "../components/NavigationButtons";

export const Introduction = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">
        Introduction
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        We received a scope of several APIs to be integrated with Fiorano ESB environment, the APIs are as highlighted below:
      </p>

      <ul className="list-disc list-inside ml-6 text-gray-700 dark:text-gray-400 mb-4">
        <li>
          <strong>Online checks:</strong>
          <ul className="list-decimal list-inside ml-4">
            <li>Mobile Credit Consumer Report with Default History and Generic Score – <strong>Product 126</strong></li>
            <li>Comprehensive Corporate Report – <strong>Product 152</strong></li>
            <li>Comprehensive Consumer Report – <strong>Product 141</strong></li>
          </ul>
        </li>
        <li>Trended View Reports – <strong>Product 146</strong></li>
        <li>
          <strong>High Velocity Count (HVC):</strong>
          <ul className="list-decimal list-inside ml-4">
            <li>High Velocity Count (HVC) – <strong>Product 139</strong></li>
            <li>Consumer Locate – <strong>Product 103</strong></li>
          </ul>
        </li>
        <li>Nipashe Indirect – <strong>Product 163</strong></li>
      </ul>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        The online checks APIs (Products 126, 152, and 141) have been assigned priority 1 in terms of integrations, followed by Trended View Reports (Product 146), High Velocity Count (Products 139, 103), and Nipashe Indirect (Product 163).
      </p>

      <p className="text-gray-600 dark:text-gray-400">
        We have configured the same in the Fiorano ESB environment and below are the details, each API requires an authentication header to be called. Details of the authentication endpoint and TransUnion APIs are provided below along with sample search data as provided by TransUnion:
      </p>

      {/* Navigation Button to Authentication Connection */}
      <NavigationButtons
        next={{ to: "/authentication", label: "Authentication Connection" }}
      />
    </div>
  );
};
