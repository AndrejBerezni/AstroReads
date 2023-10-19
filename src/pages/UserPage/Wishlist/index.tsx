import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import { booksPageStyle } from '../../../MUIstyles/userpage';
import { IBook } from '../Explore';
import BooksPage from '../../../components/BooksPage';
import { getBooks } from '../../../firebase-config';
import { AuthContext } from '../../../AuthContext';
import splitArray from '../../../utilities/splitArray';

function Wishlist() {
  const [books, setBooks] = useState<IBook[][]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<number>(0);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const getBookList = async () => {
      const bookList = await getBooks(auth.user, 'wishlist');
      setBooks(splitArray(bookList, 10));
    };
    getBookList();
    console.log(books[displayedBooks]);
  }, [books]);

  const page = displayedBooks + 1;

  const handlePaginationClick = (item: number | null) => {
    setDisplayedBooks(item! - 1);
  };

  return (
    <Box sx={booksPageStyle}>
      <BooksPage
        books={books.length > 0 ? books[displayedBooks] : []}
        buttons="wishlist"
      />
      <Pagination
        page={page}
        count={books.length}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            onClick={() => {
              handlePaginationClick(item.page);
            }}
            sx={{
              color: 'var(--secondary)',
              border: '2px solid var(--secondary)',
            }}
          />
        )}
        color="primary"
        siblingCount={0}
        variant="outlined"
        sx={{ alignSelf: 'center' }}
      />
    </Box>
  );
}

export default Wishlist;
