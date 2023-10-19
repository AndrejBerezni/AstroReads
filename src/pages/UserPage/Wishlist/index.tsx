import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';

import { booksPageStyle } from '../../../MUIstyles/userpage';
import { IBook } from '../Explore';
import BooksPage from '../../../components/BooksPage';
import { getBooks } from '../../../firebase-config';
import { AuthContext } from '../../../AuthContext';

function Wishlist() {
  const [books, setBooks] = useState<IBook[]>([]);
  const { auth } = useContext(AuthContext);

  const getBookList = async () => {
    const bookList = await getBooks(auth.user, 'wishlist');
    setBooks(bookList);
  };

  useEffect(() => {
    getBookList();
  }, [books]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  return (
    <Box sx={booksPageStyle}>
      <BooksPage books={books} buttons="wishlist" />
      <Pagination
        page={page}
        count={10}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/mybooks${item.page === 1 ? '' : `/${item.page}`}`}
            {...item}
            sx={{
              color: 'var(--secondary)',
              border: '2px solid var(--secondary)',
            }}
          />
        )}
        color="secondary"
        siblingCount={0}
        variant="outlined"
        sx={{ alignSelf: 'center' }}
      />
    </Box>
  );
}

export default Wishlist;
