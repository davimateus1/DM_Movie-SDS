import MovieStars from "Components/MovieStars";
import "./styles.css";

type Props = {
  score: number;
  count: number;
}

const MovieScore = ( { score, count } : Props ) => {

  return (
    <div className="dm-movie_score_container">
      <p className="dm-movie_score_value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars score={score}/>
      <p className="dm-movie_score_count">{count} Avaliações</p>
    </div>
  );
};

export default MovieScore;
