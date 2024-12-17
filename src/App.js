import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* TransUnion API - Redirects to Introduction */}
            <Route path="/introduction" element={<Introduction />} />

            {/* Other Pages */}
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/operation-apis" element={<OperationApis />} />
            <Route path="/operation-apis/:productId" element={<OperationApis />} />
            <Route path="/sample-search-data" element={<SampleSearchData />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
