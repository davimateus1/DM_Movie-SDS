import { ReactComponent as Arrow } from 'assets/img/arrow.svg'
import './styles.css';

const Pagination = () => {
  return (
    <div className="dm-movie_pagination_container">
      <div className="dm-movie_pagination_box">
        <button className="dm-movie_pagination_button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dm-movie_pagination_button" disabled={false}>
          <Arrow className="dm-movie_flip_horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
