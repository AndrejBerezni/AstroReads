import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InfoIcon from "@mui/icons-material/Info";
import { IBook } from "../../pages/UserPage/Explore";
import missingImage from "../../assets/missingimage.png";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";

interface ISearchResultProps {
  book: IBook;
}

const cardButtonStyle = {
  color: "primary.main",
  "&:hover": {
    color: "#f00a60",
    filter: "drop-shadow(1px 1px 2px #29def0)",
  },
};

function SearchResult({ book }: ISearchResultProps) {
  //handling description popover:
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  //shorten long titles
  function shortenText(text: string) {
    if (text.length > 50) {
      return text.substring(0, 50) + "...";
    }
    return text;
  }

  return (
    <div>
      <Card
        sx={{
          width: 280,
          height: 380,
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#242424",
          boxShadow: "0px 0px 14px #29def0",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "150px",
            width: "100px",
          }}
          image={book.image ? book.image : missingImage}
          alt={book.title}
        />
        <CardContent>
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{
              fontSize: "1.2rem",
              color: "primary.main",
              marginBottom: "10px",
            }}
          >
            {shortenText(book.title)}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: "1.2rem", color: "#f00a60" }}
          >
            {book.author}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to wishlist" sx={cardButtonStyle}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to your collection" sx={cardButtonStyle}>
            <AddBoxIcon />
          </IconButton>
          <IconButton
            aria-label="read description"
            aria-describedby={id}
            onClick={handlePopClick}
            sx={cardButtonStyle}
          >
            <InfoIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Paper
          sx={{
            maxWidth: "300px",
            maxHeight: "300px",
            overflowY: "auto",
            backgroundColor: "#242424",
            color: "primary.main",
          }}
        >
          <Typography sx={{ p: 2 }}>{book.description}</Typography>
        </Paper>
      </Popover>
    </div>
  );
}

export default SearchResult;
