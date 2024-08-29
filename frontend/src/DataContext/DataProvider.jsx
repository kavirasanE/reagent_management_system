import react, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [ReagentTableRowNo, setReagentTableRowNo] = useState("");
  const [ReagentTableData, setReagentTableData] = useState([]);

  const reagentFetchData = async () => {
    const fetchData = await axios.get("http://localhost:9800/api/getreagent");
    try {
      if (fetchData) {
        // console.log(fetchData.data);
        let ReagentValues = await fetchData.data;
        setReagentTableData(ReagentValues);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    reagentFetchData();
    console.log(ReagentTableData);
  }, []);

  return (
    <DataContext.Provider
      value={{
        ReagentTableRowNo,
        setReagentTableRowNo,
        ReagentTableData,
        setReagentTableData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
