import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import Items from './components/Items';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Navbar />
      <Discover />
      <Items />
      <Products />
    </div>
  );
}

export default App;
