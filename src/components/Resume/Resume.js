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
              title="Junior Web Developer"
              date="November 2020 - May 2021"
              content={[
                "Developed Small Java Projects and learnt the basics of web and programming.",
                "Learning Full Stack Web Development using HTML, CSS, JS, Bootstrap, Javascript and many more JavaScript Libraries and Frameworks!",
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
                `🏅 Won 2nd Prize in Hack Revolution 🏅 -  Awarded for devoloping a product called MemEthereum.`,
                `A web app that uses Ethereum based smart contracts to monetise memes`,
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
