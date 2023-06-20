import React, { useState } from "react";
import ShowUser from "./ShowUser";
import useBooksContext from "../../hooks/use-books-context";

import { NavLink } from "react-router-dom";

// Material ui
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
const columns = [
  { id: "id", label: "Id", minWidth: 17 },
  { id: "title", label: "Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "number",
    label: "Number",
    minWidth: 100,

    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "edit", label: "Edit", minWidth: 17 },
  { id: "delete", label: "Delete", minWidth: 17 },
];

function UserList() {
  const { books } = useBooksContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const renderedBooks = books
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((book) => {
      return <ShowUser key={book.id} book={book} />;
    });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Button variant="contained" style={{marginBottom:'20px',backgroundColor:'#03178a',color:'white'}}>
      <NavLink
        to="/createUser"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: "none",
        })}
      >
        Add User
      </NavLink>
      </Button>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow style={{ backgroundColor: "red" }}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#5e3afc",
                      color: "white",
                      fontWeight:'bold'
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{renderedBooks}</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={books.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default UserList;
