import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <h1>The Posts</h1>
      <div className="posts">
        {data.posts.map((post) => (
          <div className="post" key={post.slug}>
            <Link to={`/post/${post.slug}`}>
              <img src={post.image} alt={post.image} />
            </Link>
            <div className="post-info">
              <Link to={`/post/${post.slug}`}>
                <p>{post.title}</p>
              </Link>
              <p>{post.author}</p>
              <p>{post.date_published}</p>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
