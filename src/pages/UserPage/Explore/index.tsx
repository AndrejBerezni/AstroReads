import { useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { debounce } from "lodash";
import {
  CustomTextField,
  bookContainerStyle,
} from "../../../MUIstyles/userpage";
import SearchResult from "../../../components/SearchResult";

interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  pages: number;
  image: string;
}

function Explore() {
  const [results, setResults] = useState<IBook[]>([]);
  const [input, setInput] = useState("");
  const booksApiKey = import.meta.env.VITE_BOOKS_API;

  const searchBook = debounce(async (searchInput: string) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${booksApiKey}`
      );
      const items = response.data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo?.title || "Title Missing",
        author: item.volumeInfo?.authors?.[0] || "Author Missing",
        description: item.volumeInfo?.description || "Description Missing",
        pages: item.volumeInfo?.pageCount || 0,
        image: item.volumeInfo?.imageLinks?.thumbnail || "",
      }));
      setResults(items);
    } catch (error) {
      console.error(error);
    }
  }, 1000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value;
    setInput(newInput);
    if (newInput.length > 2) {
      searchBook(newInput);
    }
  };

  return (
    <Box>
      <CustomTextField
        sx={{
          width: "500px",
          maxWidth: "80%",
          margin: "30px",
        }}
        label="Search"
        onChange={handleChange}
        value={input}
      />
      <Box sx={bookContainerStyle}>
        {input.length > 2 && //This will clean list if user deletes input, instead of keeping results for first 3 letters
          results.map((item) => <SearchResult book={item} />)}
      </Box>
    </Box>
  );
}

export default Explore;
export type { IBook };
