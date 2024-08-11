import React, { useContext, useEffect, useState } from "react";
import TableLayout from "../TableLayout";

import { DataContext } from "../../DataContext/DataProvider";
const ReagentTableComponent = () => {
  const { ReagentTableData } = useContext(DataContext);

  return (
    <div>
      <div>
        <TableLayout ReagentTableData={ReagentTableData} />
      </div>
    </div>
  );
};

export default ReagentTableComponent;
