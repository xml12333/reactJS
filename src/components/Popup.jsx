import React from "react";

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>{selected.Year}</span>
          <p className="rating">Rating: {selected.imdbRating}</p>
          <div className="plot">
            <img src={selected.Poster} />
            <p>{selected.Plot}</p>
          </div>
          <button className="close" onClick={closePopup}>
            Close
          </button>
        </h2>
      </div>
    </section>
  );
}

export default Popup;
