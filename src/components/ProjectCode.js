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
                    <figcaption>E-Commerce Website</figcaption>
                </figure>
                <article>
                    <h3>My E-Commerce Project was a culmination of all that I had learned within the cohort and Gateway.
                        I am very proud of my website's outcome. </h3>
                    <p>In it I was able to incorporate flex in my css, as well including mobile responsiveness, so the 
                        website can be used on mobile.</p>
                </article>
        </section>
    );
}