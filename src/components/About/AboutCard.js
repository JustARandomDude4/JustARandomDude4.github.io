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
            <br />I don't like giving boring intros, so I shall skip this part.
            <br />
            <br />
            Apart from being sarcastic, these are what I love to invest my time on-
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Tryna be  financially savvy.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Read and observe a lot of Bussiness and Marketing.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Doodle like Dora ,sing  like a Jeon, dance like SpongeBob.
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
