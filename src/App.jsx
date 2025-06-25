import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';  
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import Auth from './pages/Auth';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard'; 
import BookNow from './pages/BookNow';

function App() {
  return (
    <>
      <NavigationBar /> {/* ✅ Use the correct component name */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
         <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/book" element={<PrivateRoute><BookNow /></PrivateRoute>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />  {/* <- catch-all */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
