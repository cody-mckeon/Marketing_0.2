import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/"> The Campaigner </Link>
        </header>
        <main>
          <Routes>
            <Route path="/post/:slug" element={<PostScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
