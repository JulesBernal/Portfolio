import React from 'react';
import './Projects.scss';

export default function Projects(){
    return(
        <section id="projecto">
            <article class="projectPanel">
                <figure class="projectFig">
                    <img src="" alt="Screenshot of Ecommerce Project Website"></img>
                    <figcaption>E-Commerce Website</figcaption>
                </figure>
                <section>
                    <h3>My E-Commerce Project was a culmination of all that I had learned within the cohort and Gateway.
                        I am very proud of my website's outcome. </h3>
                    <p>In it I was able to incorporate flex in my css, as well including mobile responsiveness, so the 
                        website can be used on mobile.</p>
                </section>
            </article>
            <article class="projectPanel">
                <figure class="projectFig">
                    <video width="320" height="240" controls> 
                        <source src="" type="video/mp4"/> Video of Roadtalks
                    </video>
                    <figcaption>Roadtalks #1: Public Transportation</figcaption>
                </figure>
                <section>
                    <h3>My first Roadtalks was something I am quite proud of, and excited to share because of the topic I choose.</h3>
                    <p>I implemented all the feedback I had received up to the moment to improve my speech skills, such as implementing pauses
                        in place of filler words, such as 'like', or 'um'. This speech also used a question to help engage the audience, also 
                        feedback received from the instructors.
                    </p>
                </section>
            </article>
        </section>
    );
}