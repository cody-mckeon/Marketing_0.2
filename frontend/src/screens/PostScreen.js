import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../components/Post.js';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';

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

function PostScreen() {
  const params = useParams();
  const { slug } = params;
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
        const result = await axios.get(`/api/posts/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      //setPosts(result.data);
    };
    fetchData();
  }, [slug]);
  return (
    <div>
      <h1>The Posts</h1>
      <div className="posts">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row></Row>
        )}
      </div>
    </div>
  );
}

export default PostScreen;
