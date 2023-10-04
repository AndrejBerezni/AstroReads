import "./styles.css";
import { IBook } from "../../pages/Trending";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import AnimationTrendingBook from "../animation/AnimationTrendingBook";

interface ITrendingBookItemProps {
  book: IBook;
}

function TrendingBookItem({ book }: ITrendingBookItemProps) {
  return (
    <AnimationTrendingBook delay={book.rank}>
      <Badge
        badgeContent={book.rank}
        color="primary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className="trending-book-item">
          <div className="trending-book-item-content">
            <h5>{book.title}</h5>
            <h6>{book.author}</h6>
            <p>{book.description}</p>
            <Button variant="contained" href={book.buyLink} target="_blank">
              Buy
            </Button>
          </div>
          <img src={book.image} alt={book.title} />
        </div>
      </Badge>
    </AnimationTrendingBook>
  );
}

export default TrendingBookItem;
