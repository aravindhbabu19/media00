import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Baby from './Components/Baby';
import Couples from './Components/Couples';
import Footer from './Components/Footer';
import Family from './Components/Family';
import Maternity from './Components/Maternity';
import Newborn from './Components/Newborn';
import Matrimonial from './Components/Matrimonial';
import Prewedding from './Components/Prewedding';
import Wedding from './Components/Wedding';
import Packages from './Pages/Packages';



function App() {
  return (
    <div>
      <Router>
         <ToastContainer theme='light' position='top-center' />
         <Navigation />
         <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/baby' element={<Baby />} />
         <Route path='/couples' element={<Couples />} />
         <Route path='/family' element={<Family />} />
         <Route path='/maternity' element={<Maternity />} />
         <Route path='/New' element={<Newborn />} />
         <Route path='/Matri' element={<Matrimonial />} />
         <Route path='/Pre' element={<Prewedding />} />
         <Route path='/Wed' element={<Wedding />} />
         <Route path='/packages' element={<Packages />} />
         </Routes>
        <Footer />
      </Router>
     
    </div>
  )
}

export default App;
