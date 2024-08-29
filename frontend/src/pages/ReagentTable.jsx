import React, { useContext } from "react";
import ReagentFunctions from "../components/Reagent/ReagentFunctions";
import ReagentTableComponent from "../components/Reagent/ReagentTableComponent";

const ReagentTable = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl underline text-center font-bold">Reagent Table </p>
      <div className="flex items-center gap-2">
        <ReagentFunctions />
      </div>
      <div>
        <ReagentTableComponent />
      </div>
    </div>
  );
};

export default ReagentTable;
