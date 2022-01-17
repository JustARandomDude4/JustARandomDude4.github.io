import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LEMME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am just a  Random  dude who stubornly chants the mantra of  : <br />
              I see it, I like it, I learn it, I code it.
              <br />I am decent in classics like
              <i>
                <b className="purple"> Java, Python,HTML, CSS and Javascript. </b>
              </i>
              <br />
              <br />
              My current eye focus is on &nbsp;
              <i>
                <b className="purple">
                   Front end devolopment
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also mess with code for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
                &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JustARandomDude4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://justarandomdude.medium.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-medium-m"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://dribbble.com/JustARandomDude"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:satwikakatragadda444@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
