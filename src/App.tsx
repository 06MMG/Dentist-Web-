
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
import HomePage from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
  <HelmetProvider>
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<HomePage />} />
      </Routes>
     <Footer />
    </Router>
  </HelmetProvider>
  
  );
}

export default App;

