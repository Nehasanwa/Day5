
import './App.css';
import Navigation from './components/Navigation'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import News from './Pages/News';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Products from './Pages/Products';
import MyCounter from './Pages/MyCounter';
import Random from './Pages/Random';

function App() {
  return (
    <>

      
  <BrowserRouter>
  <Navigation />
  <h1>Use the above Navigation Bar to switch pages</h1>
      <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/counter' element={<MyCounter />} />
          <Route path='/random' element={<Random />} />
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
