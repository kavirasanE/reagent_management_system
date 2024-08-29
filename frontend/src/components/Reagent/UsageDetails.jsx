import React, { useContext } from "react";
import { DataContext } from "../../DataContext/DataProvider";

const UsageDetails = () => {
  const { ReagentTableRowNo, ReagentTableData } = useContext(DataContext);

  const data = ReagentTableData[ReagentTableRowNo - 1] || {};

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Use a heading instead of <p> for title */}
      <h2 className="text-xl font-bold mb-4">Usage Details</h2>
      
      {/* Use div for layout instead of wrapping in <p> */}
      <div className="space-y-2">
        <div className="flex justify-center px-20 gap-4">
          <span className="font-semibold">ID:</span>
          <span>{data.id ? data.id : "No data found"}</span>
        </div>
        <div className="flex justify-center px-20 gap-4">
          <span className="font-semibold">Analyte:</span>
          <span>{data.Analyte ? data.Analyte : "N/A"}</span>
        </div>
        <div className="flex justify-center px-20 gap-4">
          <span className="font-semibold">Reagent Name:</span>
          <span>{data.Reagent_Name ? data.Reagent_Name : "N/A"}</span>
        </div>
        <div className="flex justify-center px-20 gap-4">
          <span className="font-semibold">Lot No:</span>
          <span>{data.Lot_No ? data.Lot_No : "N/A"}</span>
        </div>
        <div className="flex justify-center px-20 gap-4">
          <span className="font-semibold">Expiry Date:</span>
          <span>{data.Expiry_Date ? data.Expiry_Date : "N/A"}</span>
        </div>
        <div className="flex justify-center px-20 gap-4">
          <span className="font-semibold">Stocks Available:</span>
          <span>{data.Stocks_Avaliable ? data.Stocks_Avaliable : "N/A"}</span>
        </div>
        <div className="flex justify-center px-20 gap-4">
          <span className="font-semibold">New Stock:</span>
          <span>{data.new_stock ? data.new_stock : "N/A"}</span>
        </div>
        <div className="flex justify-center px-20 gap-4">
          <span className="font-semibold">Technician Name:</span>
          <span>{data.Technician_Name ? data.Technician_Name : "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default UsageDetails;
