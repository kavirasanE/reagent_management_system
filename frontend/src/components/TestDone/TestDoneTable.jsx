import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    name: "Frozen yoghurt",

    col4: 4.0,
    col5: 12,

    col13: 9,
    col14: 3,
    col15: 6,
    col16: 5,
    col17: 10,
    col18: 17,
    col19: 20,
    col20: 21,

    col28: 27,
    col29: 23,
    col30: 16,
  },
  {
    name: "Ice cream sandwich",
    col1: 237,
    col2: 9.0,
    col3: 37,

    col16: 6,
    col17: 11,
    col18: 18,
    col19: 21,
    col20: 22,

    col28: 30,
    col29: 26,
    col30: 17,
  },
  {
    name: "Eclair",
    col1: 262,
    col2: 16.0,

    col9: 18,
    col10: 27,

    col18: 19,
    col19: 22,
    col20: 23,

    col27: 6,
    col28: 31,
    col29: 28,
    col30: 18,
  },
  {
    name: "Cupcake",
    col1: 305,
    col2: 3.7,
    col3: 67,

    col10: 29,
    col11: 14,
    col12: 11,
    col13: 15,
    col14: 6,
    col15: 9,
    col16: 8,
    col17: 13,
    col18: 20,
    col19: 25,
    col20: 26,
    col21: 10,
    col22: 23,

    col28: 32,
    col29: 29,
    col30: 19,
  },
  {
    name: "Gingerbread",
    col1: 356,
    col2: 16.0,
    col3: 49,

    col7: 40,
    col8: 45,
    col9: 22,
    col10: 31,
    col11: 15,
    col12: 12,
    col13: 16,
    col14: 7,
    col15: 10,

    col20: 27,
    col21: 11,
    col22: 24,
    col23: 19,
    col24: 20,
    col25: 6,
    col26: 5,
    col27: 8,
    col28: 33,
    col29: 30,
    col30: 20,
  },
];

const augustDates = Array.from({ length: 31 }, (_, i) => i + 1);

export default function TestDoneTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell align="right">Analyte Name</StyledTableCell>
            {augustDates.map((data) => (
              <StyledTableCell align="right">{data}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))} */}

          {rows.map((row, index) => (
            <StyledTableRow key={row.name} c>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              {Array.from({ length: 31 }, (_, index) => (
                <StyledTableCell align="right" key={`col${index + 1}`}>
                  {row[`col${index + 1}`]}
                </StyledTableCell>
              ))}

              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
