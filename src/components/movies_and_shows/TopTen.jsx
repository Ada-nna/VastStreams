import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperCards from "../homepage/SwiperCards";
import TopAction from "../../assets/movie-categories/action-10.png";
import TopAdventure from "../../assets/movie-categories/adventure-10.png";
import TopComedy from "../../assets/movie-categories/comedy-10.png";
import TopDrama from "../../assets/movie-categories/drama-10.png";
import Horror from "../../assets/movie-categories/horror.png";
import axios from "axios";

function CustomNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "1rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 border rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "1rem",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 border rounded-full"
      >
        <path
          fillRule="evenodd"
          d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

const TopTen = () => {
  const [movies, setMovies] = useState([]);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };

  useEffect(() => {
    const fetchTopTen = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=abd1e16d4a7e8483ea0be6e084562686&language=en-US&page=1"
        );
        console.log(response.data);
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching top 10 movies:", error);
      }
    };

    fetchTopTen();
  }, []);

  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="slider-container flex px-[100px] mt-[3rem]">
      <Slider {...settings} className=" w-[100%] flex gap-4">
        {movies.map((movie) => (
          <div className="w-[295.4px] h-[342px] p-3" key={movie.id}>
            {" "}
            <SwiperCards
              image={`https://image.tmdb.org/t/p/w500{movie.poster_path}`}
              title={movie.title}
              {...movie}
            />{" "}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopTen;
