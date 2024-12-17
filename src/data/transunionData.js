export const transunionData = {
    introduction: "We received a scope of several APIs to be integrated with Fiorano ESB environment...",
    authentication: {
      url: "https://10.137.164.61:2284/accesstoken/",
      requestType: "POST",
      authType: "Bearer",
      body: {
        client_id: "*provided separately*",
        client_secret: "*provided separately*",
        grant_type: "client_credentials"
      }
    },
    operationAPIs: [
      {
        id: "product126",
        name: "Mobile Credit Consumer Report",
        endpoint: "https://10.137.164.61:2284/TransUnion/getProduct126"
      },
      {
        id: "product141",
        name: "Comprehensive Consumer Report",
        endpoint: "https://10.137.164.61:2284/TransUnion/getProduct141"
      },
      {
        id: "product152",
        name: "Comprehensive Corporate Report",
        endpoint: "https://10.137.164.61:2284/TransUnion/getProduct152"
      },
      {
        id: "product146",
        name: "Trended View Report (TVR)",
        endpoint: "https://10.137.164.61:2284/TransUnion/getProduct146"
      },
      {
        id: "product139",
        name: "High Velocity Count (HVC)",
        endpoint: "https://10.137.164.61:2284/TransUnion/getProduct139"
      },
      {
        id: "product103",
        name: "Consumer Locate",
        endpoint: "https://10.137.164.61:2284/TransUnion/getProduct103"
      },
      {
        id: "product163",
        name: "Nipashe Indirect",
        endpoint: "https://10.137.164.61:2284/TransUnion/getProduct163"
      }
    ],
    sampleSearchData: {
      consumerReport: "Sample data for consumer reports goes here...",
      corporateReport: "Sample data for corporate reports goes here..."
    }
  };
  