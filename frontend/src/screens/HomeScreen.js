import { Link } from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, posts: action.payload, loading: false };
    case 'FECTH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, posts }, dispatch] = useReducer(reducer, {
    posts: [],
    loading: true,
    error: '',
  });
  //const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/posts');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      //setPosts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>The Posts</h1>
      <div className="posts">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          posts.map((post) => (
            <div className="post" key={post.slug}>
              <img src={post.image} alt={post.name} />
              <Link to={`/post/${post.slug}`}>
                <p>{post.title}</p>
              </Link>

              <p>{post.author}</p>
              <p>{post.date_published}</p>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
