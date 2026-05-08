import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPenNib,
  faCogs,
  faDatabase,
  faTools,
  faServer,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const desktopRow1 = [
    { icon: faCode, title: "Web Development" },
    { icon: faPenNib, title: "UI / UX Design" },
    { icon: faCogs, title: "Backend APIs" },
    { icon: faDatabase, title: "Database Design" }
  ];

  const desktopRow2 = [
    { icon: faTools, title: "Website Maintenance" },
    { icon: faServer, title: "Database Management" },
    { icon: faCode, title: "API Integration" },
    { icon: faPenNib, title: "Responsive Design" }
  ];

  /* Mobile merged cards */
  const mobileCards = [...desktopRow1, ...desktopRow2];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % mobileCards.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? mobileCards.length - 1 : prev - 1
    );
  };

  return (
    <>
     

      <section id="services" className="services">
        <h2>Services</h2>

        {/* ===== DESKTOP ROW 1 ===== */}
        <div className="service-row">
          <div className="service-sliding">
            {desktopRow1.concat(desktopRow1).map((card, i) => (
              <div key={i} className="service-card neon">
                <div className="service-icon">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h3>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* ===== DESKTOP ROW 2 ===== */}
        <div className="service-row service-row-2">
          <div className="service-sliding">
            {desktopRow2.concat(desktopRow2).map((card, i) => (
              <div key={i} className="service-card neon">
                <div className="service-icon">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h3>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MOBILE WITH < > ===== */}
       {/* ===== MOBILE CAROUSEL ===== */}
<div className="service-mobile">
  <div className="service-mobile-window">
    <div
      className="service-mobile-track"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      {mobileCards.map((card, i) => (
        <div key={i} className="service-mobile-card neon">
          <div className="service-icon">
            <FontAwesomeIcon icon={card.icon} />
          </div>
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  </div>

  <div className="service-arrows">
    <button className="arrow-btn" onClick={prev}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button className="arrow-btn" onClick={next}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
</div>

      </section>
    </>
  );
}

export default Services;
