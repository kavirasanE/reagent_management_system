import React from "react";
import AddStocksForm from "../components/AddStocks/AddStocksForm";

const AddStocks = () => {
  return (
    <div>
      <p className="text-center text-2xl font-bold ">Add Stocks Forrm</p>
      <div className="border border-black/20 md:p-5 md:my-2 ">
        <AddStocksForm/>
      </div>
    </div>
  );
};

export default AddStocks;
