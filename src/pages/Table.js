import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Postable (0-1kg)', "£3.20", "£2.66", "£0.54"),
  createData('0-1kg', "£5.30", "£2.95", "£2.35"),
  createData('1-2kg', "£5.30", "£4.40", "£0.90"),
  createData('2-5kg', "£8.99", "£5.80", "£3.19"),
  createData('5-10kg', "£20.25", "£6.98", "£13.27"),
];

export default function AcccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Prices quoted are for a standard delivery of medium-sized, over-the-counter parcels that don’t incur a location charge (compared on 01/02/2022)</caption>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Royal Mail </TableCell>
            <TableCell align="right">Hermes</TableCell>
            <TableCell align="right">Saving</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
