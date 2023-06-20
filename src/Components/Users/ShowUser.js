import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

// Modal
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "20px",

  boxShadow: 24,
  p: 4,
};

function ShowUser({ book }) {
  const [name, setName] = useState(book.name);
  const [email, setEmail] = useState(book.email);
  const [number, setNumber] = useState(book.number);

  const [isError, setIsError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const { editBookById, deleteBookById } = useBooksContext();

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
    handleOpen(); // Open the modal
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowEdit(false);
  };

  const handleChange = (event) => {
    let name = event.target.value;

    setName(name);
    setIsNameError(name.length === 0);
  };

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setIsEmailError(!emailRegex.test(newEmail));
  };

  const handleNumber = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10); // Truncate the input value to 10 digits
    }
    setNumber(inputValue);
    setIsError(inputValue.length !== 10);
  };

  const editSubmit = (event) => {
    event.preventDefault();
    if (number.length !== 10) {
      setIsError(true);
      return; // Return early without creating the book
    }

    handleSubmit(event);
    editBookById(book.id, name, number, email);
    handleClose(); // Close the modal
  };

  let content = (
    <>
      <TableCell>{book.name}</TableCell>
      {/* Email */}
      <TableCell>{book.email}</TableCell>
      <TableCell>{book.number}</TableCell>
      <TableCell>
        <Avatar style={{ backgroundColor: "#e1bee7", color: "#9c27b0" }}>
          <EditIcon onClick={handleEditClick} />
        </Avatar>
      </TableCell>
    </>
  );

  const modals = () => {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              style={{
                flex: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Edit User
            </Typography>
            <TextField
              style={{ marginLeft: "90px", marginTop: "20px" }}
              helperText={
                isNameError ? "You cannot leave empty Name Field" : ""
              }
              error={isNameError}
              label="Name"
              required
              size="small"
              value={name}
              onChange={handleChange}
            />
            <TextField
              helperText={isEmailError ? "Enter valid Email" : ""}
              variant="outlined"
              error={isEmailError}
              required
              label="Email"
              type="email"
              value={email}
              onChange={handleEmail}
              style={{ marginTop: "20px", marginLeft: "90px" }}
            />
            <TextField
              size="small"
              helperText={isError ? "Number should be 10 digits" : ""}
              label="Number"
              required
              variant="outlined"
              error={isError}
              type="number"
              value={number}
              onChange={handleNumber}
              style={{ marginTop: "20px", marginLeft: "90px" }}
            />
            <br />
            <Button
              onClick={editSubmit}
              type="submit"
              variant="contained"
              color="success"
              style={{
                backgroundColor: "#25353a",
                marginTop: "20px",
                marginLeft: "160px",
              }}
            >
              <SaveIcon /> Save
            </Button>
          </Box>
        </Modal>
      </div>
    );
  };

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={book.id}>
        <TableCell key={book.id} style={{}}>
          {book.id}
        </TableCell>
        {content}

        <TableCell>
          <Avatar
            onClick={handleDeleteClick}
            style={{ backgroundColor: "#ffcdd2", color: "#f44336" }}
          >
            <DeleteIcon />
          </Avatar>
        </TableCell>
      </TableRow>
      {modals()}
    </>
  );
}

export default ShowUser;
