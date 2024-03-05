import { Container, Row, Col } from "react-bootstrap"

export default function  Contact() {
  console.log('i')
  return (
    <section className="contacts">
      <Container>
        <Row gx={1}> 
          <Col md={6}>
            <h1>Hi there</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reiciendis aliquid inventore nisi, id tenetur ex quasi eius accusamus magni amet totam ut ab numquam quod exercitationem iure? Praesentium, natus!</p>
          </Col>
          <Col md={6}>
            <h2>CONTACTS</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}