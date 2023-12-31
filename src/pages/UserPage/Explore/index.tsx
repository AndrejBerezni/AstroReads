import { useState, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import { debounce } from 'lodash';
import searchBooks from '../../../api/searchBooks';
import BookCard from '../../../components/BookCard';
import {
  CustomTextField,
  bookContainerStyle,
} from '../../../MUIstyles/userpage';

interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  pages: number;
  image: string;
  category: string;
  read: boolean;
}

function Explore() {
  const [results, setResults] = useState<IBook[]>([]);
  const [input, setInput] = useState('');

  const debouncedSearchBooks = debounce(async (searchInput) => {
    const searchResults = await searchBooks(searchInput);
    setResults(searchResults);
  }, 1000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value;
    setInput(newInput);
    if (newInput.length > 2) {
      debouncedSearchBooks(newInput);
    }
  };

  return (
    <Box>
      <CustomTextField label="Search" onChange={handleChange} value={input} />
      <Box sx={bookContainerStyle}>
        {input.length > 2 && //This will clean list if user deletes input, instead of keeping results for first 3 letters
          results.map((item) => (
            <BookCard key={item.id} book={item} buttons="explore" />
          ))}
      </Box>
    </Box>
  );
}

export default Explore;
export type { IBook };
