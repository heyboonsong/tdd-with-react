import BookList from "./BookList";
import { useRemoteService } from "./hooks";

const BookListContainer = () => {
  const { data, loading, error } = useRemoteService([]);
  return <BookList books={data} />;
};

export default BookListContainer;
