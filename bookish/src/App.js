import { Typography } from "@material-ui/core";
import BookList from "./BookList";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8080/books");
      setBooks(res.data);
    };
    fetchBooks();
  }, []);
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  );
}

export default App;
