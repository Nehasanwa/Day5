
import './App.css';
import Navigation from './components/Navigation'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import News from './Pages/News';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <>
<Navigation />

      <h1>Use above navigation to switch pages</h1>
  <BrowserRouter>
      <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
