import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import { bookContainerStyle } from "../../../MUIstyles/userpage";
import { IBook } from "../Explore";
import BookCard from "../../../components/BookCard";
import MyBooksButtons from "../../../components/button groups/MyBooksButtons";
import { getBooks } from "../../../firebase-config";
import { AuthContext } from "../../../AuthContext";

function MyBooks() {
  const [books, setBooks] = useState<IBook[]>([]);
  const { auth } = useContext(AuthContext);

  const getBookList = async () => {
    const bookList = await getBooks(auth.user, "books");
    setBooks(bookList);
  };

  useEffect(() => {
    getBookList();
  }, [books]);

  return (
    <Box sx={bookContainerStyle}>
      {books.map((item) => (
        <BookCard key={item.id} book={item}>
          <MyBooksButtons book={item} />
        </BookCard>
      ))}
    </Box>
  );
}

export default MyBooks;
