import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function BookEdit({ book, onSubmit }) {
  const [name, setName] = useState(book.name);
  const [email, setEmail] = useState(book.email);
  const [number, setNumber] = useState(book.number);

  const [isError, setIsError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    let name = event.target.value;

    setName(name);
    setIsNameError(name.length === 0);
  };

  const handleNumber = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10); // Truncate the input value to 10 digits
    }
    setNumber(inputValue);
    setIsError(inputValue.length !== 10);
  };
  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setIsEmailError(!emailRegex.test(newEmail));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (number.length !== 10) {
      setIsError(true);
      return; // Return early without creating the book
    }

    onSubmit();
    editBookById(book.id, name, number);
  };

  return (
    <Card
      style={{
        flex: 1,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        marginTop: "50px",
      }}
      sx={{ maxWidth: 150 }}
    >
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            helperText={isNameError ? "You cannot leave empty Name Field" : ""}
            variant="outlined"
            required
            label="Name"
            type="string"
            value={name}
            error={isNameError}
            onChange={handleChange}
            component="div"
            autoFocus={true}
            color="secondary"
            style={{
              flex: 1,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          />
          <br />
          {/* Email */}
          <TextField
            helperText={isEmailError ? "Enter valid Email" : ""}
            variant="outlined"
            error={isEmailError}
            required
            label="email"
            type="string"
            value={email}
            onChange={handleEmail}
            component="div"
            color="secondary"
            style={{
              flex: 1,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          />
          <TextField
            size="small"
            helperText={isError ? "Number should be 10 digits" : ""}
            label="Number"
            required
            variant="outlined"
            component="div"
            error={isError}
            type="number"
            value={number}
            onChange={handleNumber}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px auto",
              backgroundColor: "green",
            }}
          >
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default BookEdit;
