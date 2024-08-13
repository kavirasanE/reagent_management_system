import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { DataContext } from "../DataContext/DataProvider";

const columns = [
  { field: "id", headerName: "S.NO", width: 70 },
  { field: "Analyte", headerName: "Analyte", width: 130 },
  { field: "Reagent_Name", headerName: "Reagent Name", width: 170 },
  { field: "Technician_Name", headerName: "Technician Name", width: 170 },
  { field: "Lot_No", headerName: "Lot No", width: 130 },
  { field: "Expiry_Date", headerName: "Expiry Date", width: 130 },
  {
    field: "Stocks_Avaliable",
    headerName: "No of Available Packs",
    width: 170,
  },
  { field: "noOfPacksUsed", headerName: "No of Packs Used", width: 170 },
  { field: "currentdate", headerName: "Date & Time", width: 170 },

];

export default function TableLayout() {
  const { ReagentTableData, setReagentTableRowNo } = useContext(DataContext);

  const handleRowSelect = (e) => {
    const rowNo = e.toString();
    setReagentTableRowNo(rowNo);
  };

  return (
    <div style={{ height: "100%", width: "100%", color: "black" }}>
      <DataGrid
        rows={ReagentTableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[20, 10]}
        checkboxSelection
        onRowSelectionModelChange={(e) => handleRowSelect(e)}
      />
    </div>
  );
}
