import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">The Campaigner</a>
      </header>
      <main>
        <h1>The Posts</h1>
        <div className="posts">
          {data.posts.map((post) => (
            <div className="post" key={post.slug}>
              <a href={`/post/${post.slug}`}>
                <img src={post.image} alt={post.image} />
              </a>
              <div className="post-info">
                <a href={`/post/${post.slug}`}>
                  <p>{post.title}</p>
                </a>
                <p>{post.author}</p>
                <p>{post.date_published}</p>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
