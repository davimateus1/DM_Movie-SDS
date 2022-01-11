import './styles.css';

const Form = () => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="dm-movie_form_container">
      <img className="dm-movie_movie_card_image" src={movie.image} alt={movie.title} />
      <div className="dm-movie_card_bottom_container">
        <h3>{movie.title}</h3>
        <form className="dm-movie_form">
          <div className="form-group dm-movie_form_group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dm-movie_form_group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dm-movie_form_btn_container">
            <button type="submit" className="btn btn-primary dm-movie_btn">
              Salvar
            </button>
          </div>
        </form>
        <button className="btn btn-primary dm-movie_btn mt-3">Cancelar</button>
      </div>
    </div>
  );
};

export default Form;
