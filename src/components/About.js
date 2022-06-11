import React from "react";
import './About.scss';

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
        <figure id="flowAbout">
            <img src="Susan.webp" alt="Susan Kare, Apple artist slouched in chair"/>
            <img src="public/Jules.webp" alt="Jules Bernal, engineer slouched in chair"/>
        </figure>
    </section>
  );
}