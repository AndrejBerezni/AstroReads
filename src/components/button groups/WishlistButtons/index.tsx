import { useContext } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InfoIcon from '@mui/icons-material/Info';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../../../AuthContext';
import { addBook, deleteBook } from '../../../firebase-config';
import usePopover from '../../../hooks/usePopover';
import { cardButtonStyle } from '../../../MUIstyles/userpage';
import { IBook } from '../../../pages/UserPage/Explore';
import { UpdateBooksContext } from '../../../pages/UserPage/UserBooks';

interface IWishlistButtonProps {
  book: IBook;
}

function WishlistButtons({ book }: Readonly<IWishlistButtonProps>) {
  const { auth } = useContext(AuthContext);
  const { updateBookList } = useContext(UpdateBooksContext);

  const { anchorEl, handlePopClick, handlePopClose, open, id } = usePopover();

  return (
    <>
      <CardActions disableSpacing>
        <Tooltip title="Add to My Books">
          <IconButton
            aria-label="add to your collection"
            sx={cardButtonStyle}
            onClick={async () => {
              await addBook(auth.user, book, 'books');
              await deleteBook(auth.user, book, 'wishlist');
              await updateBookList();
            }}
          >
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove from Wishlist">
          <IconButton
            aria-label="remove from wishlist"
            sx={cardButtonStyle}
            onClick={async () => {
              await deleteBook(auth.user, book, 'wishlist');
              await updateBookList();
            }}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Description">
          <IconButton
            aria-label="read description"
            aria-describedby={id}
            onClick={handlePopClick}
            sx={cardButtonStyle}
          >
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Paper
          sx={{
            maxWidth: '300px',
            maxHeight: '300px',
            overflowY: 'auto',
            backgroundColor: '#242424',
            color: 'primary.main',
          }}
        >
          <Typography sx={{ p: 2 }}>{book.description}</Typography>
        </Paper>
      </Popover>
    </>
  );
}

export default WishlistButtons;
