import { Col, Container, Row } from "react-bootstrap";
import './common.css'
const Footer = () => {
    return ( 
     <section className="footer">
            <Container className="pt-5">
             <Row>
                 <Col><h4 className="logoMark">Xeniapp Inc.</h4></Col>
                 <Col ><h4 className="language">US | English</h4></Col>
                 
             </Row>
             <hr />
            <Row className="pt-4">
                <Col>
                <h4 className="titles">Company</h4>
                <h6>Xeniapp Team</h6>
                <h6>Careers</h6> 
                <h6>Privacy Policy</h6>
                <h6>Terms and Conditions</h6>
                </Col>
                <Col>
                <h4 className="titles">Build Now</h4>
                <h6>Pricing Plans</h6> 
                <h6>Learn More</h6>
                </Col>
                <Col>
                <h4 className="titles">Contact</h4>
                <h6>1 800 936 2927</h6>
                <h6>info@xeniapp.com</h6>
                <h6>Support</h6>
                </Col>
                <Col>
                <h4 className="titles">Keep Connected</h4>
                <h6>RSS Feeds</h6>
                <h6>Newsletters</h6>
                </Col>
                <Col>
                <h4 className="titles">Country &  Language</h4>
                
                </Col>
            </Row>
            <div className="d-flex">
                <p>Privacy Policy</p>
                <p>Feedback</p>
                <p>©Xeniapp 2021. All rights reserved</p>
            </div> 
        </Container>
     </section>
     );
}
 
export default Footer;