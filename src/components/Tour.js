const Tour = ({ img, date, title, info, location, duration, costs }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <div className="tour-flex">
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-map"></i>
              </span>{" "}
              {location}
            </p>
            <p>{duration} days</p>
            <p>from ${costs}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Tour;
