import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [profiles, setProfiles] = useState(data);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let last = profiles.length - 1;
    if (value < 0) {
      setValue(last);
    }
    if (value > last) {
      setValue(0);
    }
  }, [profiles, value]);

  useEffect(() => {
    let timer = setInterval(() => {
      setValue(value + 1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {profiles.map((profile, index) => {
          const { id, title, name, image, quote } = profile;
          let position = "nextSlide";
          if (index === value) {
            position = "activeSlide";
          }
          if (
            index === value - 1 ||
            (value === 0 && index === profiles.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setValue(value - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setValue(value + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
