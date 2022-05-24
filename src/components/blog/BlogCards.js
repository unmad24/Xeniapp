import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "./BlogCard";
import "./blogCards.css";

const BlogCards = ({ blogCardDatas }) => {
  return (
    <Container>
      <Row className="px-4">
        {blogCardDatas.map((blogCardData) => (
          <Col  key={blogCardData.id} md={4} className="pb-5">
            <BlogCard
              imgsrc={blogCardData.imgsrc}
              title={blogCardData.title}
              subtitle={blogCardData.subtitle}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogCards;
