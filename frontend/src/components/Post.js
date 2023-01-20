import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Post(props) {
  const { post } = props;
  return (
    <Card>
      <Link to={`/post/${post.slug}`}>
        <Card.Img
          variant="top"
          className="card-img-top"
          src={post.image}
          alt={post.name}
        />
      </Link>

      <Card.Body>
        <Link to={`/post/${post.slug}`}>
          <Card.Title>{post.title}</Card.Title>
        </Link>
        <Card.Text>{post.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
