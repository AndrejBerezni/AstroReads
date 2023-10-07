import { useState, useContext } from "react";
import InfoIcon from "@mui/icons-material/Info";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { AuthContext } from "../../../AuthContext";
import { IBook } from "../../../pages/UserPage/Explore";
import { cardButtonStyle } from "../../../MUIstyles/userpage";

interface IMyBooksButtonProps {
  book: IBook;
}

function MyBooksButtons({ book }: IMyBooksButtonProps) {
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
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <CardActions disableSpacing>
        <IconButton
          aria-label="delete book"
          sx={cardButtonStyle}
          //   onClick={}
        >
          <RemoveCircleOutlineIcon />
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
    </>
  );
}

export default MyBooksButtons;
