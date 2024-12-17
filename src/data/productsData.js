export const productsData = [
    {
      id: "product126",
      name: "Mobile Credit Consumer Report",
      details: [
        { attribute: "Request Endpoint", value: "https://10.137.164.61:2284/TransUnion/getProduct126" },
        { attribute: "Request Type", value: "POST" },
        { attribute: "Authentication Type", value: "Bearer" },
        { attribute: "Sample Request Body", value: `{
          "name1": "Surname8651",
          "name2": "Othername8651",
          "nationalID": "8651",
          "reportSector": "1",
          "reportReason": "1"
        }` },
      ],
    },
    {
      id: "product141",
      name: "Comprehensive Consumer Report",
      details: [
        { attribute: "Request Endpoint", value: "https://10.137.164.61:2284/TransUnion/getProduct141" },
        { attribute: "Request Type", value: "POST" },
        { attribute: "Authentication Type", value: "Bearer" },
        { attribute: "Sample Request Body", value: `{
          "name1": "Surname8651",
          "name2": "Othername8651",
          "nationalID": "8651",
          "reportSector": "1",
          "reportReason": "1"
        }` },
      ],
    },
    // Add more products as needed, following the same structure
  ];
  