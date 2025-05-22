import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom' ;
import PortfolioProvider from './context/Portfoliocontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
    </BrowserRouter>
  </StrictMode>,
)
