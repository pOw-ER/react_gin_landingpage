import React from 'react';
import './About.css'

const About = (props) => {
  return (
    <section className="about">
      <div>
        <div>
          <h5>{props.name}</h5>
          <h2>{props.head1}</h2>
          <h2>{props.head2}</h2>
          <h2>{props.head3 === undefined ? '' : props.head3}</h2>
          <p>{props.paragraph}</p>
          <button>{props.buttonText}</button>
        </div>
        <img src={props.img} alt="" />
      </div>
    </section>
  );
}

export default About;
