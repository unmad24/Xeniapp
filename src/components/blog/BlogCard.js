import "./blogCard.css";
import { Card } from "react-bootstrap";

const BlogCard = (props) => {
  return (
    <div>
      <Card className="blogCds">
        <Card.Body className="p-0">
         <div className="overflow">
         <img src={props.imgsrc} className="cardImg img-fluid" alt="" />
         </div>
          <div className="px-2">
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle>{props.subtitle}</Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogCard;
