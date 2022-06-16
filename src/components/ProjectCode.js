import React from 'react';
import './Projects.scss';

export default function Projects(){
    return(
        <section id="projecto">
                <figure class="projectFig">
                    <iframe 
                        src="https://julesbernal.github.io/EcommerceWebsite/"
                        height="300px"
                        width="100%"
                        title="Jules Ecommerce Website"
                        sandbox>
                    </iframe>
                    <figcaption><a href="https://github.com/JulesBernal/EcommerceWebsite">E-Commerce Website</a></figcaption>
                </figure>
                <article>
                    <h3>My E-Commerce Project was a culmination of all that I had learned within the cohort and Gateway,
                        and I am quite pleased with the outcome.</h3>
                    <p>In the project, I was able to incorporate flex in my CSS, as well as mobile responsiveness, so the 
                        website can be used on mobile devices. Accessibility was a feature I wanted to learn and use for
                        the project, such as making text have contrast with its background as well as using semantic HTML
                        to provide support for screen readers. This website challenged me through CSS, as I did not have much 
                        experience with it. My website helped to give me an idea of my strengths and weakness in conjunction
                        with a project. Using what I learned, I set goals for myself to challenge myself, such as using React
                        to create this website. </p>
                </article>
        </section>
    );
}