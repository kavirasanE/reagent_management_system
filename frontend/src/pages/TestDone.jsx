import React from "react";
import TestDoneAccordian from "../components/TestDone/TestDoneAccordian";
import TestDoneForm from "../components/TestDone/TestDoneForm";

const TestDone = () => {
  return (
    <div>
      <p className="text-center font-bold text-2xl py-5 underline">
        Test Done Table
      </p>
        <TestDoneForm/>
      <div className="flex flex-col p-5 gap-5">
        <TestDoneAccordian/>
        <TestDoneAccordian/>
        <TestDoneAccordian/>
        <TestDoneAccordian/>
        <TestDoneAccordian/>
      </div>
    </div>
  );
};

export default TestDone;
