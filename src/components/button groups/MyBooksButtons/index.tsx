import { useContext } from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import InfoIcon from '@mui/icons-material/Info';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CardActions from '@mui/material/CardActions';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { cardButtonStyle } from '../../../MUIstyles/userpage';
import { IBook } from '../../../pages/UserPage/Explore';
import { AuthContext } from '../../../AuthContext';
import { UpdateBooksContext } from '../../../pages/UserPage/UserBooks';
import { updateBookRead, deleteBook } from '../../../firebase-config';
import usePopover from '../../../hooks/usePopover';

interface IMyBooksButtonProps {
  book: IBook;
}

function MyBooksButtons({ book }: Readonly<IMyBooksButtonProps>) {
  const { auth } = useContext(AuthContext);
  const { updateBookList } = useContext(UpdateBooksContext);

  const { anchorEl, handlePopClick, handlePopClose, open, id } = usePopover();

  return (
    <>
      <CardActions disableSpacing>
        <Tooltip title={`Mark as ${book.read ? 'unread' : 'read'}`}>
          <IconButton
            aria-label="book read"
            sx={cardButtonStyle}
            onClick={async () => {
              await updateBookRead(auth.user, book);
              await updateBookList();
            }}
          >
            {book.read ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove from My Books">
          <IconButton
            aria-label="delete book"
            sx={cardButtonStyle}
            onClick={async () => {
              await deleteBook(auth.user, book, 'books');
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

export default MyBooksButtons;
