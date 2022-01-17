import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Hima Satwika Katragadda</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KHS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/JustARandomDude4"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://justarandomdude.medium.com"
                style={{ color: "white" }}
              >
                <i className="fab fa-medium-m"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://dribbble.com/JustARandomDude"
                style={{ color: "white" }}
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="mailto:satwikakatragadda444@gmail.com"
                style={{ color: "white" }}
              >
                  <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
