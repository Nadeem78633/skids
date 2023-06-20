import React, { useEffect, useContext } from "react";
import Header from "./Components/Home/Header";
import Footer from "./Components/Home/Footer";

// Users
import CreateUser from "./Components/Users/CreateUser";
import UserList from "./Components/Users/UserList";
import UserContext from "./context/books";

// Components
import "./App.css";

// React router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { RouterProvider } from "react-router";


const App = () => {
  const { fetchBooks } = useContext(UserContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Header />
            <Footer />
          </>
        }
      >
        <Route index element={<UserList />} />

        <Route path="createUser" element={<CreateUser />} />
      </Route>
    )
  );

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
