import React from 'react';
import Events from './Events';
import './EventSection.css'
import { allEvents } from './Events'

const EventSection = () => {
  return (
    <section id="events_section">
      <h4>DUE TO COVID-19 AND THE TEMPORARY CLOSING OF BATHTUB GIN, OUR NIGHTLY ENTERTAINMENT IS CURRENTLY ON PAUSE. STAY TUNED FOR UPDATES ON OUR REOPENING DATE AND NEW EVENTS, COMING SOON!</h4>
      <div id="events">
        <Events
          eventImg={allEvents[0].eventImg}
          imgText={allEvents[0].imgText}
          eventDay={allEvents[0].eventDay}
          eventTime={allEvents[0].eventTime}
          eventDetails={allEvents[0].eventDetails}
        />
        <Events
          eventImg={allEvents[1].eventImg}
          imgText={allEvents[1].imgText}
          eventDay={allEvents[1].eventDay}
          eventTime={allEvents[1].eventTime}
          eventDetails={allEvents[1].eventDetails}
        />
        <Events
          eventImg={allEvents[2].eventImg}
          imgText={allEvents[2].imgText}
          eventDay={allEvents[2].eventDay}
          eventTime={allEvents[2].eventTime}
          eventDetails={allEvents[2].eventDetails}
        />
      </div>
    </section>
  );
}

export default EventSection;
