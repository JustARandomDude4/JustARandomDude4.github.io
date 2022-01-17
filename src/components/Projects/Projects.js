import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import simon from "../../Assets/Projects/simon.png";
import magic from "../../Assets/Projects/magic.jpg";
import phoenix from "../../Assets/Projects/phoenix.png";
import hp from "../../Assets/Projects/hp.png";
import galga from "../../Assets/Projects/galga.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

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
              imgPath={phoenix}
              isBlog={false}
              title="Doodle.io"
              description="This is a very simple multi-user doodling web app, using  real-time network JavaScript API, that enable you to draw on the canvas with strangers."
              link="https://justarandomdude4.github.io/doodle.github.io/"
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
              imgPath={magic}
              isBlog={false}
              title="Magic Mirror"
              description="This is an awesome Magic Mirror! If you enable camera, you can choose cool and various effects to apply onto your camera. There are many camera effects that I have added to the project."
              link="https://github.com/Code2Rithik/magic-mirror"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hp}
              isBlog={false}
              title="Harry Potter Fan Website"
              description="This is a Harry Potter Fan Website that I made to show my love for the Harry Potter series. Though, It's not very functional, it looks very beautiful"
              link="https://github.com/Code2Rithik/hp-fan-website"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://res.cloudinary.com/practicaldev/image/fetch/s--FBTSp3gp--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lgxtnsnqf5j977e5dmkf.png"
              link="https://dev.to/code2rithik/awesome-404-page-templates-for-your-websites-33jc"
              title="Awesome 404 Page Templates for your Websites"
              site="dev.to"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://miro.medium.com/max/1400/0*Dnlbk16RBxmvL-TJ.png"
              link="https://rithikjs.medium.com/how-to-create-your-own-express-server-a97053ed7046"
              title="How to Create your Own Express Server"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
