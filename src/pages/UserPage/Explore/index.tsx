import { useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { debounce } from "lodash";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#29def0",
  },
  "& label": {
    color: "#f00a60",
    fontFamily: '"Orbitron", sans-serif',
  },
  "&:hover label": {
    color: "#29def0",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#29def0",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f00a60",
    },
    "&:hover fieldset": {
      borderColor: "#29def0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#29def0",
    },
    "& .MuiOutlinedInput-input": {
      color: "#29def0",
      fontFamily: '"Orbitron", sans-serif',
    },
  },
});

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
          marginTop: "30px",
        }}
        label="Search"
        onChange={handleChange}
        value={input}
      />
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <h4>{item.author}</h4>
            <p>{item.description}</p>
            <h5>{item.pages}</h5>
            <img src={item.image} alt={item.title} />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Explore;
