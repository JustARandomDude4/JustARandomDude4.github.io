import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import simon from "../../Assets/Projects/simon.png";
import magic from "../../Assets/Projects/magic.png";
import phoenix from "../../Assets/Projects/phoenix.jpg";
import hp from "../../Assets/Projects/hp.png";
import galga from "../../Assets/Projects/galga.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="MemEthereum"
              description="Decentralised Social Media enabled with Ethereum Tipping to the original creators for posting memes. You can also view the source code of this simon game by viewing my github profile."
              link="https://github.com/JustARandomDude4/MemEthereum"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={magic}
              isBlog={false}
              title="Illusion of a cube wave"
              description="I have always hated math 😣😣, and I felt like I somehow need to reduce that wrath for it, as its a nice subject and it doesnt deserve my eye roll.\n So, I decided to learn math by making fun projects that are not only a feast to the eyes, but teach me a lot of concept of how animations work. And there u go, I made a cubeWave.💁‍♀️"
              link="https://github.com/JustARandomDude4/IlusionOfCubeWave"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galga}
              isBlog={false}
              title="Satwi's Sorting Visualiser"
              description="GEver got confused with how sorting algoritms work? Well, I have made it easy for u to learn sorting algoritms, by visualising how they work :))"
              link="https://github.com/JustARandomDude4/Satwi-sSortingVisualiser"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phoenix}
              isBlog={false}
              title="Doodle.io"
              description="This is a very simple multi-user doodling web app, using  real-time network JavaScript API, that enable you to draw on the canvas with strangers."
              link="https://justarandomdude4.github.io/doodle.github.io/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hp}
              isBlog={false}
              title="Discord Bot"
              description="A customised birthday Discord Bot. The bot uses slash commands, where the user can select an option of /wish /gift /sendlove etc and send wishes to their loved ones."
              link="https://github.com/JustARandomDude4/Satwi-sFirstDiscordBot"
            />
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}

export default Projects;
