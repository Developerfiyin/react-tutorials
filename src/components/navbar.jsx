export default function Navbar() {
  const ingredients = [
    "banana",
    "salad",
    "eba and egusi",
    "spagetti and fish sauce",
  ];
  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  console.log(ingredientsList);
  return (
    <main>
      <form action="">
        <input
          type="text"
          placeholder="e.g Fried rice"
          aria-label="name"
          className="inp"
          required
        />{" "}
        <button className="collector"> Add ingredient </button>
      </form>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </main>
    /* <article className="journal">
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
    </article>*/
  );
}
