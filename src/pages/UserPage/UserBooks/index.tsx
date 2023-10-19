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

interface IUserBooksProps {
  section: string;
}

function UserBooks({ section }: Readonly<IUserBooksProps>) {
  const [books, setBooks] = useState<IBook[][]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<number>(0);
  const { auth } = useContext(AuthContext);

  const updateBookList = async () => {
    const bookList = await getBooks(auth.user, section);
    setBooks(splitArray(bookList, 10));
  };

  useEffect(() => {
    updateBookList();
  }, [auth.user, section]);

  const page = displayedBooks + 1;

  const handlePaginationClick = (item: number | null) => {
    setDisplayedBooks(item! - 1);
  };

  return (
    <Box sx={booksPageStyle}>
      <BooksPage
        books={books.length > 0 ? books[displayedBooks] : []}
        buttons={section}
        updateBooks={updateBookList}
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

export default UserBooks;
