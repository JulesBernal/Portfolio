import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Splash from "./components/Splash"
import About from "./components/About";
// import Contact from "./components/Contact";
import ProjectCode from "./components/ProjectCode";
import ProjectsPD from "./components/ProjectPD";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section id="mainSection">
      <Router>
        <Navbar />
        <article id="bodyApp">
          <Routes>
            <Route path='/' element={<Splash/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/project_code' element={<ProjectCode/>}/>
            <Route path='/project_pd' element={<ProjectsPD/>}/>
            {/* <Route path='/contact' element={<Contact/>}/> */}
          </Routes>
        </article>
      </Router>
    </section>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
