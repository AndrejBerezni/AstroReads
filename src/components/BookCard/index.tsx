import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import missingImage from '../../assets/missingimage.png';
import MyBooksButtons from '../button groups/MyBooksButtons';
import SearchResultsButtons from '../button groups/SearchResultButtons';
import WishlistButtons from '../button groups/WishlistButtons';
import { IBook } from '../../pages/UserPage/Explore';
import {
  bookCardStyle,
  bookImageStyle,
  bookTitleStyle,
  bookAuthorStyle,
} from '../../MUIstyles/userpage';

interface ISearchResultProps {
  book: IBook;
  buttons: string;
  updateBooks: () => void;
}

const buttonComponent = {
  explore: (book: IBook) => <SearchResultsButtons book={book} />,
  books: (book: IBook, updateBooks: () => void) => (
    <MyBooksButtons book={book} updateBooks={updateBooks} />
  ),
  wishlist: (book: IBook, updateBooks: () => void) => (
    <WishlistButtons book={book} updateBooks={updateBooks} />
  ),
};

function BookCard({
  book,
  buttons,
  updateBooks,
}: Readonly<ISearchResultProps>) {
  //shorten long titles
  function shortenText(text: string) {
    if (text.length > 50) {
      return text.substring(0, 50) + '...';
    }
    return text;
  }

  return (
    <div>
      <Card sx={bookCardStyle}>
        <CardMedia
          component="img"
          sx={bookImageStyle}
          image={book.image ? book.image : missingImage}
          alt={book.title}
        />
        <CardContent>
          <Typography variant="h4" color="text.secondary" sx={bookTitleStyle}>
            {shortenText(book.title)}
          </Typography>
          <Typography variant="h5" sx={bookAuthorStyle}>
            {book.author}
          </Typography>
        </CardContent>
        {buttonComponent[buttons as keyof typeof buttonComponent](
          book,
          updateBooks,
        )}
      </Card>
    </div>
  );
}

export default BookCard;
