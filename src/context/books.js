import { createContext, useState, useCallback } from "react";
import axios from "axios";

const UserContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  const editBookById = async (id, newTitle, newNumber,newEmail) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      name: newTitle,
      number: newNumber,
      email:newEmail
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createUser = async (name, email, number) => {
    const response = await axios.post("http://localhost:3001/books", {
      name,
      email,
      number,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createUser,
    fetchBooks,
  };

  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  );
}

export { Provider };
export default UserContext;
