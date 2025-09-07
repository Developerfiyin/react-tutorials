export default function Navbar(Props) {
  return (
    <article className="journal">
      <div className="main-image-container">
        <img src={Props.img.src} alt={Props.img.alt} />
      </div>

      <div className="info-container">
        <img
          src="src/assets/location marker.png
          "
          alt="location marker image"
          className="marker"
        />
        <span className="country">JAPAN</span>
        <a href={Props.GoggleLink}>View on Google Map</a>

        <h2 className="entry-title">{Props.name}</h2>
        <p className="trip-dates">{Props.date} </p>
        <p className="entry-text"> {Props.text}</p>
      </div>
    </article>
  );
}
