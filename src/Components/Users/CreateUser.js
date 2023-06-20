import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";

// Grid
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// React Toastify is used to show the alert
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [isNumberError, setIsNumberError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const { createUser } = useBooksContext();

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
    setIsNumberError(inputValue.length !== 10);
  };
  // Function for react toastify
  const displayLoginNotification = () => {
    toast.success("User Added Successfully !");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (number.length !== 10) {
      setIsNumberError(true);
      return; // Return early without creating the book
    }
    createUser(name, email, number);
    setName("");
    setEmail("");
    setNumber("");
    // Calling Toastify function inside the submit
    displayLoginNotification();
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={12}
            style={{
              flex: 1,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Card>
              <CardContent>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  gutterBottom
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Add a User
                </Typography>
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <TextField
                    helperText={
                      isNameError ? "You cannot leave empty Name Field" : ""
                    }
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
                  <br />
                  {/* Phone Number */}
                  <TextField
                    helperText={
                      isNumberError ? "Number should be 10 digits" : ""
                    }
                    label="Number"
                    required
                    value={number}
                    onChange={handleNumber}
                    variant="outlined"
                    component="div"
                    error={isNumberError}
                    type="number"
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
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                      backgroundColor: "#5e3afc",
                    }}
                  >
                    Create !
                  </Button>
                </form>
              </CardContent>
            </Card>
            {/* Toastify */}
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CreateUser;
