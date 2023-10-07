import { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import missingImage from "../../assets/missingimage.png";
import { IBook } from "../../pages/UserPage/Explore";

interface ISearchResultProps {
  book: IBook;
  children: ReactNode;
}

function BookCard({ book, children }: ISearchResultProps) {
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
        {children}
      </Card>
    </div>
  );
}

export default BookCard;
