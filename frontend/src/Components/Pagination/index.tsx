import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { MoviePage } from "types/movie";
import "./styles.css";

type Props = {
  page: MoviePage;
  onChange: Function;
};

const Pagination = ({ page, onChange }: Props) => {
  return (
    <div className="dm-movie_pagination_container">
      <div className="dm-movie_pagination_box">
        <button
          className="dm-movie_pagination_button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button 
        className="dm-movie_pagination_button" 
        disabled={page.last}
        onClick={() => onChange(page.number + 1)}
        >
          <Arrow className="dm-movie_flip_horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
