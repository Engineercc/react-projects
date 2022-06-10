import React, { useState } from "react";

const MenuItem = ({ id, baslik, icerik, gorsel, amperaj }) => {
  const lessTitle = icerik.substr(0, 110);
  const [more, setReadMore] = useState(false);
  return (
    <article className="menu-item" key={id}>
      <img src={gorsel[0]} alt={baslik} className="photo" />
      <div className="item-info">
        <header style={{ alignItems: "center" }}>
          <h4>{baslik}</h4>
          <h4 className="price filter-btn amperaj">{amperaj ? amperaj : ""}</h4>
        </header>
        <p className="item-text">
          {more ? icerik : `${lessTitle}...`}
          {icerik.length >= 120 && (
            <button
              className="read-btn filter-btn"
              onClick={() => setReadMore(!more)}
            >
              {!more ? "Show More" : "Show Less"}
            </button>
          )}
        </p>
      </div>
      <button className="filter-btn active-btn">Details</button>
    </article>
  );
};

export default MenuItem;
