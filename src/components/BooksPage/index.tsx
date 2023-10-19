import Box from '@mui/material/Box';

import { bookContainerStyle } from '../../MUIstyles/userpage';
import { IBook } from '../../pages/UserPage/Explore';
import BookCard from '../BookCard';

interface IBooksPageProps {
  books: IBook[];
  buttons: string;
  updateBooks: () => void;
}

function BooksPage({ books, buttons, updateBooks }: IBooksPageProps) {
  return (
    <Box sx={bookContainerStyle}>
      {books.map((item) => (
        <BookCard
          key={item.id}
          book={item}
          buttons={buttons}
          updateBooks={updateBooks}
        />
      ))}
    </Box>
  );
}

export default BooksPage;
