import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Languages, Libraries and Frameworks I <strong className="purple">Learn </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-html5-plain" />
          <Techstack iconName="devicon-css3-plain" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-jquery-plain" />
          <Techstack iconName="devicon-python-plain" />
          <Techstack iconName="devicon-typescript-plain" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-anaconda" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-zeit" />
          <Techstack iconName="cib-heroku" />
          <Techstack iconName="devicon-jupyter-plain" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-figma-plain" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Text Editors</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="devicon-atom-original" />
          <Techstack iconName="devicon-vim-plain" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
