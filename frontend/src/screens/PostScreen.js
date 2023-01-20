import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet-async';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, post: action.payload, loading: false };
    case 'FECTH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function PostScreen() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, post }, dispatch] = useReducer(reducer, {
    post: [],
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
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div> {error} </div>
  ) : (
    <div>
      <Row>
        <img className="img-large" src={post.image} alt={post.title}></img>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Helmet>
              <title>{post.title}</title>
            </Helmet>
            <h1>{post.title}</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>{post.content}</p>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </div>
  );
}

export default PostScreen;
