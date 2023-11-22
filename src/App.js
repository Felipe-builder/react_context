import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Products from './page/Products';
import About from './page/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
