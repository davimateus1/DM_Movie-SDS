import MovieStars from "Components/MovieStars";
import "./styles.css";

const MovieScore = () => {
  const score = 3.5;
  const count = 13;

  return (
    <div className="dm-movie_score_container">
      <p className="dm-movie_score_value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="dm-movie_score_count">{count} avaliações</p>
    </div>
  );
};

export default MovieScore;
