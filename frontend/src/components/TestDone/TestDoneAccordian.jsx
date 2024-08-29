import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TestDoneTable from "./TestDoneTable";

export default function TestDoneAccordian() {
  return (
    <div>
      <Accordion >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon className="bg-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{border:"2px", borderColor:"black"}}
        >
          <p className="font-bold">Test Done- August </p>
        </AccordionSummary>
        <AccordionDetails>
         <TestDoneTable/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
