import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';

import { bookContainerStyle } from '../../../MUIstyles/userpage';
import { IBook } from '../Explore';
import BooksPage from '../../../components/BooksPage';
import { getBooks } from '../../../firebase-config';
import { AuthContext } from '../../../AuthContext';
import splitArray from '../../../utilities/splitArray';

function MyBooks() {
  const [books, setBooks] = useState<IBook[][]>([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const getBookList = async () => {
      const bookList = await getBooks(auth.user, 'books');
      setBooks(splitArray(bookList, 10));
    };
    getBookList();
  }, [books]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  return (
    <Box sx={bookContainerStyle}>
      {books.map((booksChunk: IBook[]) => (
        <BooksPage
          key={booksChunk[0].id}
          books={booksChunk}
          buttons="mybooks"
        />
      ))}
      <Pagination
        page={page}
        count={books.length}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/mybooks${item.page === 1 ? '' : `/${item.page}`}`}
            {...item}
            sx={{
              color: 'var(--primary)',
              borderColor: 'var(--primary)',
            }}
          />
        )}
        siblingCount={0}
        color="primary"
        variant="outlined"
      />
    </Box>
  );
}

export default MyBooks;
