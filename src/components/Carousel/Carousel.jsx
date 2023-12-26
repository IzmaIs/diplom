import Slider from "react-slick";

import classes from "./slider.module.scss";


const responsiveConfig = [{
  breakpoint: 1024, settings: {
    slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true,
  },
}, {
  breakpoint: 600, settings: {
    slidesToShow: 2, slidesToScroll: 2, initialSlide: 2,
  },
}, {
  breakpoint: 480, settings: {
    slidesToShow: 1, slidesToScroll: 1,
  },
}];

export const Carousel = ({ items }) => {

  const Next = (props) => {
    return (<div style={{ background: "red" }} onClick={props.onClick}>next</div>);
  };
  const Prev = (props) => {
    return (<div style={{ background: "red" }} onClick={props.onClick}>next</div>);
  };

  return (<div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
      <Slider
        style={{ display: "flex", justifyContent: "center" }}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
        className={classes.customClass}
        responsive={responsiveConfig}
      >
        {items}
      </Slider>
    </div>);
};