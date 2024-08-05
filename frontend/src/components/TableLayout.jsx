import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "S.NO", width: 70 },
  { field: "analyte", headerName: "Analyte", width: 130 },
  { field: "reagentName", headerName: "Reagent Name", width: 170 },
  { field: "lotNo", headerName: "Lot No", width: 130 },
  { field: "expiryDate", headerName: "Expiry Date", width: 130 },
  {
    field: "noOfAvailablePacks",
    headerName: "No of Available Packs",
    width: 170,
  },
  { field: "noOfPacksUsed", headerName: "No of Packs Used", width: 170 },
  {
    field: "noOfRemainingStocks",
    headerName: "No of Remaining Stocks",
    width: 170,
  },
];

const rows = [
  {
    id: 1,
    analyte: "Glucose",
    reagentName: "GluTest",
    lotNo: "12345",
    expiryDate: "2025-06-30",
    noOfAvailablePacks: 20,
    noOfPacksUsed: 5,
    noOfRemainingStocks: 15,
  },
  {
    id: 2,
    analyte: "Sodium",
    reagentName: "NaCheck",
    lotNo: "67890",
    expiryDate: "2024-12-31",
    noOfAvailablePacks: 15,
    noOfPacksUsed: 3,
    noOfRemainingStocks: 12,
  },
  {
    id: 3,
    analyte: "Potassium",
    reagentName: "KTest",
    lotNo: "54321",
    expiryDate: "2026-03-15",
    noOfAvailablePacks: 25,
    noOfPacksUsed: 8,
    noOfRemainingStocks: 17,
  },
  {
    id: 4,
    analyte: "Calcium",
    reagentName: "CaAssay",
    lotNo: "98765",
    expiryDate: "2024-08-31",
    noOfAvailablePacks: 10,
    noOfPacksUsed: 4,
    noOfRemainingStocks: 6,
  },
  {
    id: 5,
    analyte: "Chloride",
    reagentName: "ClTest",
    lotNo: "11223",
    expiryDate: "2025-01-15",
    noOfAvailablePacks: 30,
    noOfPacksUsed: 10,
    noOfRemainingStocks: 20,
  },
  {
    id: 6,
    analyte: "Magnesium",
    reagentName: "MgTest",
    lotNo: "67891",
    expiryDate: "2025-05-20",
    noOfAvailablePacks: 22,
    noOfPacksUsed: 7,
    noOfRemainingStocks: 15,
  },
  {
    id: 7,
    analyte: "Iron",
    reagentName: "FeTest",
    lotNo: "54322",
    expiryDate: "2024-11-15",
    noOfAvailablePacks: 18,
    noOfPacksUsed: 6,
    noOfRemainingStocks: 12,
  },
  {
    id: 8,
    analyte: "Zinc",
    reagentName: "ZnTest",
    lotNo: "98766",
    expiryDate: "2026-01-10",
    noOfAvailablePacks: 28,
    noOfPacksUsed: 9,
    noOfRemainingStocks: 19,
  },
  {
    id: 9,
    analyte: "Copper",
    reagentName: "CuTest",
    lotNo: "11224",
    expiryDate: "2025-07-25",
    noOfAvailablePacks: 12,
    noOfPacksUsed: 3,
    noOfRemainingStocks: 9,
  },
  {
    id: 10,
    analyte: "Iodine",
    reagentName: "ITest",
    lotNo: "67892",
    expiryDate: "2024-12-01",
    noOfAvailablePacks: 17,
    noOfPacksUsed: 5,
    noOfRemainingStocks: 12,
  },
  {
    id: 11,
    analyte: "Manganese",
    reagentName: "MnTest",
    lotNo: "54323",
    expiryDate: "2026-04-30",
    noOfAvailablePacks: 21,
    noOfPacksUsed: 8,
    noOfRemainingStocks: 13,
  },
  {
    id: 12,
    analyte: "Phosphorus",
    reagentName: "PTest",
    lotNo: "98767",
    expiryDate: "2025-03-12",
    noOfAvailablePacks: 26,
    noOfPacksUsed: 7,
    noOfRemainingStocks: 19,
  },
  {
    id: 13,
    analyte: "Sulfur",
    reagentName: "STest",
    lotNo: "11225",
    expiryDate: "2024-10-21",
    noOfAvailablePacks: 20,
    noOfPacksUsed: 6,
    noOfRemainingStocks: 14,
  },
  {
    id: 14,
    analyte: "Chromium",
    reagentName: "CrTest",
    lotNo: "67893",
    expiryDate: "2026-02-28",
    noOfAvailablePacks: 15,
    noOfPacksUsed: 4,
    noOfRemainingStocks: 11,
  },
  {
    id: 15,
    analyte: "Selenium",
    reagentName: "SeTest",
    lotNo: "54324",
    expiryDate: "2025-08-05",
    noOfAvailablePacks: 23,
    noOfPacksUsed: 10,
    noOfRemainingStocks: 13,
  },
];


export default function TableLayout() {
  return (
    <div style={{ height: 400, width: "100%", color: "black" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}


