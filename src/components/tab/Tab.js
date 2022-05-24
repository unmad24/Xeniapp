import { Button, Col, Container, Row } from "react-bootstrap";
import "./tab.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faChevronCircleDown,
  faArrowCircleDown,
  faChartBar,
  faWrench,
  faLocationArrow,
  faUserGroup,
  faArrowPointer,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

library.add(
  faCheckSquare,
  faChevronCircleDown,
  faArrowCircleDown,
  faChartBar,
  faWrench,
  faLocationArrow,
  faUserGroup,
  faArrowPointer
);

const tabDatas = [
  {
    id: 1,
    lebel: "Dashboard",
    icon: "fa-chart-bar",
    imgSrc: "./images/dashboard.png",
  },
  {
    id: 2,
    lebel: "PLUM",
    icon: "fa-solid fa-wrench",
    imgSrc: "./images/Billing.png",
  },
];

const TabPractice = () => {
  const [images, setImages] = useState(tabDatas[0].imgSrc);
  const [border, setBorder] = useState(0);
  const [shadow, setShadow] = useState("sm");

  const handleImages = (e) => {
    setImages(e);
    setShadow("lg");
    setBorder(2);
  };

  return (
    <section className="tabs pb-5 pt-3">
      <Container>
        <h3 className="textSection text-center my-5">
          Power your business with Xeniapp{" "}
        </h3>
        <Row>
          <Col md={9}>
            <img src={images} className="img-fluid shadow mb-4" alt="" />
          </Col>
          <Col md={3} className="d-flex flex-column tabIcon">
            {tabDatas.map((tabData) => (
              <Button
                key={tabData.id}
                onClick={() => handleImages(tabData.imgSrc)}
                className={`mb-4 mx-4 p-3 shadow-${
                  tabData.imgSrc === images ? shadow : " "
                } border-${tabData.imgSrc === images ? border : 0}`}
              >
                <FontAwesomeIcon className="mx-2" icon={tabData.icon} />
                {tabData.lebel}
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TabPractice;
