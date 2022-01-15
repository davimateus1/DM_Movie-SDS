import axios from "axios";
import MovieCard from "Components/MovieCard";
import Pagination from "Components/Pagination";
import { useState, useEffect } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

const Listing = () => {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=0`)
      .then((res) => {
        const data = res.data as MoviePage;
        console.log(data)
        setPageNumber(data.number);
      })
      .catch();
  }, []);

  return (
    <>
      <p>{pageNumber}</p>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
