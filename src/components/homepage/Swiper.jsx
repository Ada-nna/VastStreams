import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };
  return (
    <div className="slider-container flex justify-center p-5">
      <Slider {...settings} className=" w-[90%] flex">
        <div className="border-2 justify-center text-center flex place-items-center border-green-600">
          <h3 className="text-[red] text-[200px]">1</h3>
        </div>
        <div className="border-2 justify-center text-center flex place-items-center border-green-600">
          <h3 className="text-[red] text-[200px]">2</h3>
        </div>
        <div className="border-2 justify-center text-center flex place-items-center border-green-600">
          <h3 className="text-[red] text-[200px]">3</h3>
        </div>
        <div className="border-2 justify-center text-center flex place-items-center border-green-600">
          <h3 className="text-[red] text-[200px]">4</h3>
        </div>
        <div className="border-2 justify-center text-center flex place-items-center border-green-600">
          <h3 className="text-[red] text-[200px]">5</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
