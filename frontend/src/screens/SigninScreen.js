import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useContext, useState, useEffect } from 'react'; //useContext complete signin part 2
import { Store } from '../Store'; //complete signin part 2
import { toast } from 'react-toastify';
//having Problems with Github was working on the wrong remote
export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // complete signin part 2
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state; // signin part 2
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/signin', {
        email,
        password,
      });
      // use the store
      //complete signin part 2
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      // complete signin part 2
      //
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
      console.log(data);
    } catch (err) {
      toast.error('Invalid email or password');
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New Blogger?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
