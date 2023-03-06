import axios from 'axios';
import React, { useEffect, useReducer, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Store } from '../Store';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

//Step 1 manage posts
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        posts: action.payload.posts,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function PostListScreen() {
  //Step 2 manage posts
  const [{ loading, error, posts, pages }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  // Step 4 manage posts
  const { search, pathname } = useLocation();
  // Step 5 manage posts
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;

  // Step 6 manage posts
  const { state } = useContext(Store);
  const { userInfo } = state;

  // Step 3 manage posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/posts/admin?page=${page}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        //Step  7 manage posts
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {}
    };
    fetchData();
  }, [page, userInfo]); // Step 8 Manage Posts
  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>slug</th>
                <th>image</th>
                <th>author</th>
                <th>date_published</th>
                <th>content</th>
                <th>tags</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>{post.title}</td>
                  <td>{post.slug}</td>
                  <td>{post.image}</td>
                  <td>{post.author}</td>
                  <td>{post.date_published}</td>
                  <td>{post.content}</td>
                  <td>{post.tags}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === Number(page) ? 'btn text-bold' : 'btn'}
                key={x + 1}
                to={`/postlist?page=${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
