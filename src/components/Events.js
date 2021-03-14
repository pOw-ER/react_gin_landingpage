import React from 'react';
import './Events.css'
// import Event1 from '../../src/img/events1.png'
// import Event2 from '../../src/img/events1.png'
// import Event3 from '../../src/img/events1.png'

let allEvents = [
  {
    eventImg: '/img/events1.png',
    imgText: "Jazz n' Jive",
    eventDay: 'EVERY MONDAY',
    eventTime: '9 - 11PM',
    eventDetails: 'Jazz up your Monday nights with intimate and lively performances by a rotating selection of renowned bands.'
  },
  {
    eventImg: '/img/events2.png',
    imgText: "Burlesque After Dark",
    eventDay: 'EVERY TUESDAY & SUNDAY',
    eventTime: '9:30PM',
    eventDetails: 'Enter the world of burlesque and lose yourself in enticing witty performances, exceptional cocktails, and lively music.'
  },
  {
    eventImg: '/img/events3.png',
    imgText: "DJs & Dance Tracks",
    eventDay: 'EVERY THURSDAY, FRIDAY & SATURDAY NIGHT',
    eventTime: 'FROM 9PM & 10PM',
    eventDetails: "If you're looking for a packed crowd, come when the party is bigger, the pace is faster, and the morals are looser."
  }
]

const Events = (props) => {
  return (
    <div className="event">
      <div>
        <img src={props.eventImg} alt="" />
        <div>{props.imgText}</div>
      </div>
      <h5>{props.eventDay}</h5>
      <h6>{props.eventTime}</h6>
      <p>{props.eventDetails}</p>
    </div>
  );
}
export { allEvents };
export default Events;
