import MovieScore from "Components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
  movie: Movie;
}

const MovieCard = ( { movie } : Props ) => {

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
