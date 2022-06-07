import logo from './logo.svg';
import React from "react";
import './about.css';

export default function About() {
  return (
    <section id="about">
      <header className="contact-header">
        <h1>
          Jules Bernal Benitez
        </h1>
        <p>
          Road to Hire coding Apprentice of Cohort 10!
        </p>
        <p>Love to learn coding and be trans!</p>
      </header>
        <fig id="flowAbout">
            <img src="public/Susan.webp" alt="Picture of Susan Kare, Apple artist slouched in chair"/>
            <img src="public/Jules.webp" alt="Picture of Jules Bernal, engineer slouched in chair"/>
        </fig>
    </section>
  );
}