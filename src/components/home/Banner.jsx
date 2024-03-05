import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, CaretDownFill } from "react-bootstrap-icons";
import headerImg from "../../assets/img/banner-img.png"
import TrackVisibility from "react-on-screen";
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';


export default function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) => 
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <Col xs={12} md={6} xl={5} className="bg-pem">
                  {/* <img src={''} alt="Header Img" className="bg-banner"/> */}
                </Col>
              </div>
            }
            </TrackVisibility>
            <TrackVisibility>
            {({isVisible}) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h1>WELCOME TO MY PLACE</h1>
                <a href="#more">
              <button className="tagline-btn">
                SEE MORE BELOW <CaretDownFill size={50} />
                <span aria-hidden class="tagline-btn__glitch">SEE MORE BELOW </span>
                {/* <span aria-hidden class="tagline-btn__tag">R25</span> */}
              </button>
                </a>
              <p>I’m a Illustrator, Graphic Designer, <br></br> and a Junior Front-End Web Developer</p>
            </div>
            }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}