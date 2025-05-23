import { useContext, useEffect } from 'react';
import './App.css'
import PreLoader from './components/PreLoader'
import { PortfolioContext } from './context/Portfoliocontext'
import NavHeader from './components/NavHeader';
import {Routes , Route} from 'react-router-dom' ;
import Home from './pages/Home' ;
import About from './pages/About' ;
import Projects from './pages/Projects' ;
import Certificates from './pages/Certificates' ;
import Blogs from './pages/Blogs' ;
import Footer from './components/Footer';

function App() {

  const {load , setLoad} = useContext(PortfolioContext) ;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    },1200) ;

    return() => clearTimeout(timer) ;
  },[])

  return (
   <>
   <PreLoader load={load}/>
   <div className='bg-dark text-light' style={{ paddingTop: '70px' }}>
    <NavHeader />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/certificates' element={<Certificates />} />
      <Route path='/blogs' element={<Blogs />} />
    </Routes>
    <Footer />
   </div>
   </>
  )
}

export default App
