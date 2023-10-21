import { useState, useEffect, useContext, createContext } from 'react';
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

const UpdateBooksContext = createContext({
  updateBookList: async () => {},
}); // creating context to avoid prop drill through 4 components to reach card buttons

function UserBooks({ section }: Readonly<IUserBooksProps>) {
  const [books, setBooks] = useState<IBook[][]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<number>(0);
  const [page, setPage] = useState<number>(displayedBooks + 1); //passed to pagination to control current page
  const { auth } = useContext(AuthContext);

  const updateBookList = async () => {
    const bookList = await getBooks(auth.user, section);
    setBooks(splitArray(bookList, 10));
  };

  useEffect(() => {
    updateBookList();
    setDisplayedBooks(0);
    setPage(1);
  }, [auth.user, section]);

  const handlePaginationClick = (item: number | null) => {
    setDisplayedBooks(item! - 1);
    setPage(item!);
  };

  return (
    <UpdateBooksContext.Provider value={{ updateBookList }}>
      <Box sx={booksPageStyle}>
        <BooksPage
          books={books.length > 0 ? books[displayedBooks] : []}
          buttons={section}
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
    </UpdateBooksContext.Provider>
  );
}

export { UpdateBooksContext };
export default UserBooks;
