import logo from './logo.svg';
import './App.css';

function contact() {
  return (
    <div className="contact">
      <header className="contact-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Jules Bernal Benitez
        </h1>
        <p>
          Road to Hire coding Apprentice of Cohort 10!
        </p>
        <p>Love to learn coding and be trans!</p>
        <a
          className="App-link"
          href="https://github.com/JulesBernal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default contact;