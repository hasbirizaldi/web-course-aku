import { Accordion, Container, Row, Col } from "react-bootstrap";
import { faq } from "../data/index";

function FaqComponent() {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInDown" data-aos="fade-up" data-aos-duration="1000">
              Pertanyaan yang sering ditanyakan
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-2 pt-5" data-aos="fade-up" data-aos-duration="1000">
          {faq.map((data) => {
            return (
              <Col key={data.id} className="animate__animated animate__fadeInUp animate__delay-1s">
                <Accordion className="shadow">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default FaqComponent;
