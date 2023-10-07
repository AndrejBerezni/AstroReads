import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import { bookContainerStyle } from "../../../MUIstyles/userpage";
import { IBook } from "../Explore";
import BookCard from "../../../components/BookCard";
import WishlistButtons from "../../../components/button groups/WishlistButtons";
import { getBooks } from "../../../firebase-config";
import { AuthContext } from "../../../AuthContext";

function Wishlist() {
  const [books, setBooks] = useState<IBook[]>([]);
  const { auth } = useContext(AuthContext);

  const getBookList = async () => {
    const bookList = await getBooks(auth.user, "wishlist");
    setBooks(bookList);
  };

  useEffect(() => {
    getBookList();
  }, [books]);

  return (
    <Box sx={bookContainerStyle}>
      {books.map((item) => (
        <BookCard key={item.id} book={item}>
          <WishlistButtons book={item} />
        </BookCard>
      ))}
    </Box>
  );
}

export default Wishlist;
