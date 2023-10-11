import { useState, useContext } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import CardActions from '@mui/material/CardActions';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { addBook } from '../../../firebase-config';
import { AuthContext } from '../../../AuthContext';
import { IBook } from '../../../pages/UserPage/Explore';
import { cardButtonStyle } from '../../../MUIstyles/userpage';

interface ISearchResultsButtonProps {
  book: IBook;
}

function SearchResultsButtons({ book }: ISearchResultsButtonProps) {
  const { auth } = useContext(AuthContext);

  //handling description popover:
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <CardActions disableSpacing>
        <Tooltip title="Add to wishlist">
          <IconButton
            aria-label="add to wishlist"
            sx={cardButtonStyle}
            onClick={async () => await addBook(auth.user, book, 'wishlist')}
          >
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to My Books">
          <IconButton
            aria-label="add to your collection"
            sx={cardButtonStyle}
            onClick={async () => await addBook(auth.user, book, 'books')}
          >
            <AddBoxIcon />
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

export default SearchResultsButtons;
