import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ReagentTable from "./pages/ReagentTable";
import TestDone from "./pages/TestDone";
import AboutRIS from "./pages/AboutRIS";
import Layout from "./Layout/Layout";
import AddStocks from "./pages/AddStocks";
import Admin from "./pages/Admin";
import EditReagentDataForm from "./components/Reagent/EditReagentDataForm";
import UsageDetails from "./components/Reagent/UsageDetails";
import UsageForm from "./components/Reagent/UsageForm";

// This is a comment

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <DashBoard />
              </Layout>
            }
          />
          <Route
            path="/reagenttable"
            element={
              <Layout>
                <ReagentTable />
              </Layout>
            }
          />
          <Route
            path="/testdone"
            element={
              <Layout>
                <TestDone />
              </Layout>
            }
          />
          <Route
            path="/aboutris"
            element={
              <Layout>
                <AboutRIS />
              </Layout>
            }
          />
          <Route
            path="/addstocks"
            element={
              <Layout>
                <AddStocks />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />
          <Route
            path="/editreagent"
            element={
              <Layout>
                <EditReagentDataForm />
              </Layout>
            }
          />
          <Route
            path="/usagedetails"
            element={
              <Layout>
                <UsageDetails />
              </Layout>
            }
          />
           <Route
            path="/usageform"
            element={
              <Layout>
                <UsageForm />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
