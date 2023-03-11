import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testpage.css"

export const Card = (props) => {
  const events = props?.events || [];
  const numEvents = events.length;
  const numCards = 3;
  const eventsPerCard = Math.ceil(numEvents / numCards);

  const cards = [];
  for (let i = 0; i < numCards; i++) {
    const startIndex = i * eventsPerCard;
    const endIndex = Math.min(startIndex + eventsPerCard, numEvents);
    const cardEvents = events.slice(startIndex, endIndex);
    cards.push(
      <div className="card mb-3 " style={{ maxWidth: "540px" }} key={i}>
        <div className="row g-0">
            {cardEvents.map((event) => (
              <>
              <img className="card-img-top" src={event.eventUrl}/>
                        <div className="col-md-4">

                        </div>
              <div className="card-body" key={event._id}>
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">{event.location}</p>
              </div>
              </>
            ))}
        </div>
      </div>
    );
  }

  return <>{cards}</>;
};
