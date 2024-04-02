import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwiperCards from "../homepage/SwiperCards";
import Action from "../../assets/movie-categories/action.png";
import Adventure from "../../assets/movie-categories/adventure.png";
import Comedy from "../../assets/movie-categories/comedy.png";
import Drama from "../../assets/movie-categories/drama.png";
import Horror from "../../assets/movie-categories/horror.png";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmQxZTE2ZDRhN2U4NDgzZWEwYmU2ZTA4NDU2MjY4NiIsInN1YiI6IjY1ZGUzZmJiNzc3NmYwMDE3YzExZjYyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hc5uoB1NI7Ugt3HM3x_ZZ80UFN-KWezwRkQuOmK9Zp8'
  }
};

fetch('https://api.themoviedb.org/3/account/21037472/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

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

function MoviesHero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    infinite: true,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };

  return (
    <div className="slider-container flex px-[100px] mt-[3rem]">
      <Slider {...settings} className=" w-[100%] flex gap-4">
        <div className="w-[295.4px] h-[52rem] p-3">
          <SwiperCards image={Action} title="Action" />
        </div>
        <div className="w-[295.4px] h-[52rem] p-3">
          <SwiperCards image={Adventure} title="Adventure" />
        </div>
        <div className="w-[295.4px] h-[52rem] p-3">
          <SwiperCards image={Comedy} title="Comedy" />
        </div>
        <div className="w-[295.4px] h-[52rem] p-3">
          <SwiperCards image={Drama} title="Drama" />
        </div>
        <div className="w-[295.4px] h-[52rem] p-3">
          <SwiperCards image={Horror} title="Horror" />
        </div>
      </Slider>
    </div>
  );
}

export default MoviesHero;
