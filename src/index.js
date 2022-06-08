import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Splash from "./components/Splash"
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
        <Navbar />
        <Routes>
        {/* <App /> */}
          <Route path='/' element={<Splash/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
