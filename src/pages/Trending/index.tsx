import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import fetchTrendingBooks from '../../api/trendingBooks';
import AnimationFadeIn from '../../components/animation/AnimationFadeIn';
import TrendingBookItem from '../../components/TrendingBookItem';
import {
  sectionContainerStyle,
  trendingContainerStyle,
} from '../../MUIstyles/about';

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
    const setTrendingBooks = async () => {
      try {
        const [fiction, nonfiction] = await Promise.all([
          fetchTrendingBooks('combined-print-and-e-book-fiction'),
          fetchTrendingBooks('combined-print-and-e-book-nonfiction'),
        ]);
        setFictionBooks(fiction);
        setNonfictionBooks(nonfiction);
      } catch (error) {
        console.error('Error fetching trending books:', error);
      }
    };

    setTrendingBooks();
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
