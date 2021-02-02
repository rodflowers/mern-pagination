import { useState, useEffect } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

const App = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/post?page=${page}`);
        const { data, pages: totalPages } = await res.json();

        setPages(totalPages);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some error ocurred");
      }
    };

    fetchPosts();
  }, [page]);
  return (
    <div className="app">
      <Pagination page={page} pages={pages} changePage={setPage} />
      <div className="app__posts">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} pages={pages} changePage={setPage} />
    </div>
  );
};

export default App;
