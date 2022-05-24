// import { Card } from "react-bootstrap";
import CardUi from "./CardUi";
import "./cardUi.css";
import { Col, Container, Row } from "react-bootstrap";

const Cards = ({ cardDatas }) => {
  return (
   <section className="cardSection py-1">
      <Container className="my-5">
      <Row className="cardRows">
        {cardDatas.map((cardData) => (
          <Col key={cardData.id}
          className="fiveCards" >
            <CardUi
              imgsrc={cardData.imgsrc}
              title={cardData.title}
              subtitle={cardData.subtitle}
            />
          </Col>
        ))}
      </Row>
    </Container>
   </section>
  );
};

export default Cards;
