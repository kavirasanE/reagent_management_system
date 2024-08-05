import * as React from "react";
import Box from "@mui/material/Box";
const DashboardData = () => {
  return (
    <div>
      <Box
        height={200}
        width={600}
        my={4}
        display="flex"
        alignItems="center"
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <div className="grid grid-cols-2 gap-5 justify-between items-center  w-full h-full text-center">
          <p className="border-r-2 border-black/20 h-16 flex flex-col">
            Reagent stocks <span className="font-bold text-4xl">05</span>
          </p>
          <p className="h-16 flex flex-col">
            Test Done <span className="font-bold text-4xl">05</span>
          </p>

          <p className="border-r-2 border-black/20 h-16 flex flex-col">
            Current stocks <span className="font-bold text-4xl">05</span>
          </p>
          <p className="h-16 flex flex-col">
            Lots <span className="font-bold text-4xl">05</span>
          </p>
        </div>
      </Box>
    </div>
  );
};

export default DashboardData;
