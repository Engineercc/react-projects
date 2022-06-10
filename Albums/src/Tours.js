import React from "react";
import Tour from "./Tour";
const Tours = ({ removeTour, tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="uderline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour key={id} {...tour} removeTour={removeTour}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
