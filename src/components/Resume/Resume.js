import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Hima_Satwika_Katragadda_resume.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Project Intern"
              date="January 2022 - Present"
              content={[
                "Working on the project of  building a website  in Springboot and  Angular for a startup called Advorator. ",
                "Also learning Full Stack Web Development using HTML, CSS, Bootstrap, Javascript and  JavaScript Libraries and Frameworks like p5.js ,three.js ,node.js, React.js",
              ]}
  
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="St.Ann's high School"
              date="2011 - 2018"
              content={[]}
            />
            <Resumecontent
              title="Sri Chaitanya Junior College"
              date="2018 - 2020"
              content={[]}
            />
            <Resumecontent
              title="Vasavi College of Engineering"
              date="2020 - Current"
              content={[]}
            />
            <h3 className="resume-title">Badges and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `🏅 Won 2nd Prize in Hack Revolution 🏅 \n🔗 Awarded for devoloping a product called MemEthereum.`,
                `🔗 A web app that uses Ethereum based smart contracts to monetise memes`,
                        `🏅 Won 1st Prize in Problem Plethora 🏅 \n🔗 Awarded for identifing the problem of Accomodation in Hostels in India pitching a bussiness plan to solve it.`,
              
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
