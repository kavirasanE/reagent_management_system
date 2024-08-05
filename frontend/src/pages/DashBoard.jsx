import React from "react";
import DashboardFunctions from "../components/Dashboard/DashboardFunctions";
import DashboardTable from "../components/Dashboard/DashboardTable";
import DashboardData from "../components/Dashboard/DashboardData";

const DashBoard = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <DashboardFunctions />
        <DashboardData/>  
      </div>
      <div>
        <DashboardTable />
      </div>
    </div>
  );
};

export default DashBoard;
