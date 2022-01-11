import MovieScore from "Components/MovieScore";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div>
      <img
        className="dm-movie_movie_card_image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dm-movie_card_bottom_container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dm-movie_btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
