import {Card} from "react-bootstrap";
import "./cardUi.css";

const CardUi = (props) => {
  return (
    <div>
      <Card className="properties">
        <Card.Body className="d-flex flex-column align-items-center">
          <img src={props.imgsrc} alt="" className="card-img" />
          <Card.Title className=" title
          text-center">{props.title}</Card.Title>
          <Card.Subtitle className="subtitle mb-2 text-center">
           {props.subtitle}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardUi;
