import React from "react";
import AddStocksForm from "../components/AddStocks/AddStocksForm";

const AddStocks = () => {
  return (
    <div>
      <p className="text-center text-2xl font-bold ">Add Stocks Forrm</p>
      <div className="border border-black/20 md:p-10 md:mx-20 md:my-10 ">
        <AddStocksForm/>
      </div>
    </div>
  );
};

export default AddStocks;
