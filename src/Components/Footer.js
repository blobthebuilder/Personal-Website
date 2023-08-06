import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid>
      <Row className="footer">
        <Col
          md="6"
          className="footer-copywright align-self-center">
          <h3>Designed and Developed by Frank Wang 2023</h3>
        </Col>
        <Col
          md="6"
          className="footer-body d-flex flex-row t align-self-center justify-content-center">
          <h3>Connect with me:</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/blobthebuilder"
                target="_blank"
                rel="noopener noreferrer">
                <AiFillGithub size={25} />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/frank-wang-cs/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn size={25} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
