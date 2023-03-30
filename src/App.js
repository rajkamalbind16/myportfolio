import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import About from './Components/About us/About';
import Contect from './Components/Contect us/Contect';
import Service from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import PageNotFound from './Components/Page not Found/PageNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className='mainConatiner'>
     <BrowserRouter>
     
     <Navbar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="Aboutus" element={<About />} />
          <Route path="contact" element={<Contect />} />
          <Route path="Work" element={<Work />} />
          <Route path="Services" element={<Service />} />
          <Route path="*" element={<PageNotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter> 
    </div>
    </>
  );
}

export default App;
