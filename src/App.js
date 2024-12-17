import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Introduction } from "./pages/Introduction";
import { Authentication } from "./pages/Authentication";
import { OperationApis } from "./pages/OperationApis";
import { SampleSearchData } from "./pages/SampleSearchData";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 flex-1 p-4">
          <Routes>
            {/* Define routes for main pages */}
            <Route path="/" element={<Introduction />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/sample-search-data" element={<SampleSearchData />} />

            {/* Route for Operation APIs, with dynamic products */}
            <Route path="/operation-apis" element={<OperationApis />} />
            <Route path="/operation-apis/:productId" element={<OperationApis />} /> {/* Dynamic product routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
