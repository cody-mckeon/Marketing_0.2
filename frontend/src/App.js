import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import SigninScreen from './screens/SigninScreen';
import { Store } from './Store';
import { useContext } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
//Problems pushing to the wrong remote

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="light" variant="light">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>The Campaigner</Navbar.Brand>
              </LinkContainer>
              {/*Signin Screen Part 2 */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign out
                  </Link>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              )}
            </Container>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/post/:slug" element={<PostScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
