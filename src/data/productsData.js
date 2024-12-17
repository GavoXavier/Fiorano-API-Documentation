export const productsData = [
    {
      id: "product126",
      name: "Mobile Credit Consumer Report",
      description: "Provides a credit report with default history and generic score.",
      details: [
        { attribute: "Request Endpoint", value: "https://10.137.164.61:2284/TransUnion/getProduct126" },
        { attribute: "Request Type", value: "POST" },
        { attribute: "Authentication Type", value: "Bearer" },
        { attribute: "Sample Request Body", value: `{"name1":"Surname8651","nationalID":"8651"}` },
      ],
    },
    {
      id: "product141",
      name: "Comprehensive Consumer Report",
      description: "Delivers an in-depth consumer credit report for verification.",
      details: [
        { attribute: "Request Endpoint", value: "https://10.137.164.61:2284/TransUnion/getProduct141" },
        { attribute: "Request Type", value: "POST" },
        { attribute: "Authentication Type", value: "Bearer" },
        { attribute: "Sample Request Body", value: `{"name1":"Surname8651","nationalID":"8651"}` },
      ],
    },
    {
      id: "product152",
      name: "Comprehensive Corporate Report",
      description: "Reports corporate details such as registration and credit information.",
      details: [
        { attribute: "Request Endpoint", value: "https://10.137.164.61:2284/TransUnion/getProduct152" },
        { attribute: "Request Type", value: "POST" },
        { attribute: "Authentication Type", value: "Bearer" },
        { attribute: "Sample Request Body", value: `{"companyName":"Company39706584"}` },
      ],
    },
    {
      id: "product163",
      name: "Nipashe Indirect",
      description: "Provides indirect access to corporate and director details.",
      details: [
        { attribute: "Request Endpoint", value: "https://10.137.164.61:2284/TransUnion/getProduct163" },
        { attribute: "Request Type", value: "POST" },
        { attribute: "Authentication Type", value: "Bearer" },
        { attribute: "Sample Request Body", value: `{"companyName":"Company39706580"}` },
      ],
    },
  ];
  