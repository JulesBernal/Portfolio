import React from 'react';
import ReactPlayer from "react-player"
import './Projects.scss';

export default function Projects(){
    return(
        <section id="projecto">
                <figure class="projectFig">
                    {/* <video width="320" height="240" controls> 
                        <source src="https://youtu.be/NOJn89j2La0" type="video/mp4"/> Video of Roadtalks
                    </video> */}
                    <ReactPlayer
                            url="https://youtu.be/NOJn89j2La0"
                            controls
                            width="100%"
                        /> Video of Roadtalks
                    <figcaption>Roadtalks #1: Public Transportation</figcaption>
                </figure>
                <article>
                    <h3>My first Roadtalks was something I am quite proud of, and excited to share because of the topic I chose.</h3>
                    <p>I implemented all the feedback I had received up to the moment to improve my speech skills, such as implementing pauses
                        in place of filler words, such as 'like', or 'um'. This speech also used a question to help engage the audience, also 
                        feedback received from the instructors. I also used hooks to help engage my audience with the introductory story.
                        Roadtalks challenged me by putting me out of my comfort zone by presenting to an audience. Using what I learned 
                        from the Roadtalks, my goals have formed to continue to find my unique presentation style as well as to include 
                        my personal brand.
                    </p>
                </article>
        </section>
    );
}