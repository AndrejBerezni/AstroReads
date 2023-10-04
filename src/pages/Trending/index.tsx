import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TrendingBookItem from "../../components/TrendingBookItem";
import axios, { AxiosResponse } from "axios";
import { motion } from "framer-motion";

interface IBook {
  title: string;
  author: string;
  rank: number;
  description: string;
  buyLink: string;
  image: string;
}

export type { IBook };

function Trending() {
  const [fictionBooks, setFictionBooks] = useState<IBook[]>([]);
  const [nonfictionBooks, setNonfictionBooks] = useState<IBook[]>([]);

  useEffect(() => {
    const nyTimesApiKey = import.meta.env.VITE_NY_TIMES_API;
    const fetchBooks = async (
      list: string,
      setBooks: (books: IBook[]) => void
    ) => {
      try {
        const response: AxiosResponse<any, any> = await axios.get(
          `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${nyTimesApiKey}`
        );
        const data = response.data.results.books.slice(0, 5);
        const newBooks: IBook[] = data.map((book: any) => ({
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
    <Box
      sx={{
        placeItems: "center",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <motion.h1
        className="title-trending"
        animate={{
          scale: 1,
          opacity: 1,
        }}
        initial={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        The New York Times Best Sellers
      </motion.h1>
      <motion.h2
        className="subtitle-trending"
        animate={{
          scale: 1,
          opacity: 1,
        }}
        initial={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Top 5 fiction books
      </motion.h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {fictionBooks.map((book) => (
          <TrendingBookItem key={book.title} book={book} />
        ))}
      </Box>
      <motion.h2
        className="subtitle-trending"
        animate={{
          scale: 1,
          opacity: 1,
        }}
        initial={{
          scale: 0,
          opacity: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Top 5 nonfiction books
      </motion.h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {nonfictionBooks.map((book) => (
          <TrendingBookItem key={book.title} book={book} />
        ))}
      </Box>
    </Box>
  );
}

export default Trending;
