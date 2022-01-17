import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Ya'll, I am <span className="purple">Satwika</span>,
            <br />I am a Junior Web Developer learning more about ReactJS and node.js by pursuing various courses.
            <br />
            <br />
            Apart from coding, these are what I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Messing with drawing nfts
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
