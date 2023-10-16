import axios from 'axios';
const booksApiKey = import.meta.env.VITE_BOOKS_API;

const searchBooks = async (searchInput: string) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${booksApiKey}`,
    );
    const items = response.data.items.map((item: any) => ({
      id: item.id,
      title: item.volumeInfo?.title || 'Title Missing',
      author: item.volumeInfo?.authors?.[0] || 'Author Missing',
      description: item.volumeInfo?.description || 'Description Missing',
      pages: item.volumeInfo?.pageCount || 0,
      image: item.volumeInfo?.imageLinks?.thumbnail || '',
      category: item.volumeInfo?.categories?.[0] || 'Uncategorized',
      read: false,
    }));
    return items;
  } catch (error: any) {
    console.log(error.message);
    throw new Error('An error occurred while searching for books.');
  }
};

export default searchBooks;
