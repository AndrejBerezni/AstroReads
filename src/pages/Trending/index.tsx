import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import AnimationFadeIn from "../../components/animation/AnimationFadeIn";
import TrendingBookItem from "../../components/TrendingBookItem";
import {
  sectionContainerStyle,
  trendingContainerStyle,
} from "../../MUIstyles/about";

interface IBookTrending {
  title: string;
  author: string;
  rank: number;
  description: string;
  buyLink: string;
  image: string;
}

export type { IBookTrending };

function Trending() {
  const [fictionBooks, setFictionBooks] = useState<IBookTrending[]>([]);
  const [nonfictionBooks, setNonfictionBooks] = useState<IBookTrending[]>([]);

  useEffect(() => {
    const nyTimesApiKey = import.meta.env.VITE_NY_TIMES_API;
    const fetchBooks = async (
      list: string,
      setBooks: (books: IBookTrending[]) => void
    ) => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${nyTimesApiKey}`
        );
        const data = response.data.results.books.slice(0, 10);
        const newBooks: IBookTrending[] = data.map((book: any) => ({
          title: book.title,
          author: book.author,
          rank: book.rank,
          description: book.description,
          buyLink: book.buy_links[0].url,
          image: book.book_image,
        }));
        setBooks(newBooks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks("combined-print-and-e-book-fiction", setFictionBooks);
    fetchBooks("combined-print-and-e-book-nonfiction", setNonfictionBooks);
  }, []);

  return (
    <Box sx={trendingContainerStyle}>
      <AnimationFadeIn>
        <h1 className="title-trending">The New York Times Best Sellers</h1>
      </AnimationFadeIn>
      <AnimationFadeIn>
        <h2 className="subtitle-trending">Top 10 fiction books</h2>
      </AnimationFadeIn>

      <Box sx={sectionContainerStyle}>
        {fictionBooks.map((book) => (
          <TrendingBookItem key={book.title} book={book} />
        ))}
      </Box>
      <AnimationFadeIn>
        <h2 className="subtitle-trending">Top 10 nonfiction books</h2>
      </AnimationFadeIn>
      <Box sx={sectionContainerStyle}>
        {nonfictionBooks.map((book) => (
          <TrendingBookItem key={book.title} book={book} />
        ))}
      </Box>
    </Box>
  );
}

export default Trending;
