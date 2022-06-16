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
        <p>Born in South America, Colombia, but raised in Richmond, Virginia!</p>
        <p>2016 Graduate of Reynolds Community with a associate's in Computer and Electrical Engineering.</p>
        <p>I spent my free time learning about the tech world and immersing myself in art such as video games and music.</p>
      </header>
      <article id="aboutFlow">
        <figure class="flowAbout">
            <img src="susan_kare.jpg" alt="Susan Kare, Apple artist slouched in chair"/>
            <p>Susan Kare, an Apple Artist that is a big inspiration for me.</p>
        </figure>
        <figure class="flowAbout">
            <img src="jules_comp.jpg" alt="Jules Bernal, engineer slouched in chair"/>
            <p>Jules Bernal, an aspiring engineer posing like Susan Kare</p>
        </figure>
      </article>
    </section>
  );
}