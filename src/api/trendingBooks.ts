import axios from 'axios';

import { IBookTrending } from '../pages/Trending';

const nyTimesApiKey = import.meta.env.VITE_NY_TIMES_API;

const fetchTrendingBooks = async (list: string): Promise<IBookTrending[]> => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${nyTimesApiKey}`,
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
    return newBooks;
  } catch (error) {
    throw new Error('An error occurred while fetching trending books.');
  }
};

export default fetchTrendingBooks;
