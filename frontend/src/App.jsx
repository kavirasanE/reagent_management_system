import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import ReagentTable from "./pages/ReagentTable";
import TestDone from "./pages/TestDone";
import AboutRIS from "./pages/AboutRIS";
import Layout from "./Layout/Layout";
import AddStocks from "./pages/AddStocks";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/dasboard"
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
