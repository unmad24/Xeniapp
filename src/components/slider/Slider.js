import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button, Container } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faChevronCircleDown,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./slider.css";

library.add(faCheckSquare, faChevronCircleDown, faArrowCircleDown);

const Slider = () => {
  return (
    <section className="slider py-3">
      <Container className="shadow p-0">
        <Carousel>
          <Carousel.Item interval={2000}>
            <h2 className="text">
              Everything you need to
              <br /> run your travel business
            </h2>
            <Button className="buttonBuild">Build Now</Button>
            <img
              className="d-block w-100"
              src="./images/slider.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <h2 className="text">
              Everything you need to
              <br /> run your travel business
            </h2>
            <Button className="buttonBuild">Build Now</Button>
            <img
              className="d-block w-100"
              src="./images/slider.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <h2 className="text">
              Everything you need to
              <br /> run your travel business
            </h2>
            <Button className="buttonBuild">Build Now</Button>
            <img
              className="d-block w-100"
              src="./images/slider.png"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="text-center sliderIcon">
        <FontAwesomeIcon className="downArrow" icon="fa-chevron-circle-down" />
      </div>
    </section>
  );
};

export default Slider;
