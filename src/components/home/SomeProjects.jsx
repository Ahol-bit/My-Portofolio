import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import meter1 from '../../assets/img/meter1.png'
import meter2 from '../../assets/img/meter2.png'
import meter3 from '../../assets/img/meter3.png'
import meter4 from '../../assets/img/meter4.png'
import meter5 from '../../assets/img/meter7.png'
import meter6 from '../../assets/img/meter6.png'


export default function SomeProjects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skills" id="skills">
    <Container>
      <Row>
        <Col>
          <div className="skill-bx">
            <h2 id="more">
              SOME OF PROJECTS
            </h2>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className="owl-carousel owl-theme skill-slider"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
              <div className="item">
                <img src={meter1} alt="Image" />
              </div>
              <div className="item">
                <img src={meter2} alt="Image" />
              </div>
              <div className="item">
                <img src={meter3} alt="Image" />
              </div>
              <div className="item">
                <img src={meter4} alt="Image" />
              </div>
              <div className="item">
                <img src={meter5} alt="Image" />
              </div>
              <div className="item">
                <img src={meter6} alt="Image" />
              </div>
            </Carousel>
            <button className="more-btn tagline-btn">
              <span className="more-s">MORE PROJECT</span>
              <span aria-hidden class="tagline-btn__glitch">MORE</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}