import Box from '@mui/material/Box';

import { bookContainerStyle } from '../../MUIstyles/userpage';
import { IBook } from '../../pages/UserPage/Explore';
import BookCard from '../BookCard';

interface IBooksPageProps {
  books: IBook[];
  buttons: string;
}

function BooksPage({ books, buttons }: IBooksPageProps) {
  return (
    <Box sx={bookContainerStyle}>
      {books.map((item) => (
        <BookCard key={item.id} book={item} buttons={buttons} />
      ))}
    </Box>
  );
}

export default BooksPage;
