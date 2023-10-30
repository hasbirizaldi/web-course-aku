import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInDown">Semua Testimonial</h1>
              <p className="text-center animate__animated animate__fadeInDown">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, architecto!</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className=" mb-5 shadow-sm rounded-3 animate__animated animate__zoomIn animate__delay-1s">
                  <p className="desc shadow-sm p-2">{data.desc}</p>
                  <div className="people p-3">
                    <img src={data.image} alt="image-testimonial" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;
