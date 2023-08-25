import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import toster from "../../Assets/toster.png";
import exploratorium from "../../Assets/exploratorium.png";
import citizenaid from "../../Assets/citizenaid.png";
import sonicsort from "../../Assets/sonicsort.png";

function Project() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenCards = document.querySelectorAll(".project-card");
    const hiddenImg = document.querySelectorAll(".leftHidden");
    hiddenCards.forEach((el) => observer.observe(el));
    hiddenImg.forEach((el) => observer.observe(el));
  });

  return (
    <Container
      fluid
      className="project-section">
      <h1 className="project-heading">Things I Have Worked On</h1>
      <h1 className="project-sub">for now...</h1>

      <Row className="project-row">
        <Col
          md={5}
          className="my-auto">
          <img
            src={toster}
            className="img-fluid leftHidden project-img"
            alt="TOS-ter"
          />
        </Col>
        <Col
          md={7}
          className="project-card my-auto">
          <ProjectCard
            title="TOS-ter"
            devpostLink="https://devpost.com/software/tos-ter?ref_content=user-portfolio&ref_feature=in_progress"
            ghLink="https://github.com/larryz1230/TOSter"
            demoLink="https://www.youtube.com/watch?v=3-Ab9ohTr4U"
            inspiration="Nobody wants to read long and confusing Terms of Service Agreements, so we made a program to do it for you!"
            functions="TOS-ter uses large language models to summarize TOS documents into a few important bullet points. It also generates a privacy rating based on the contract's details and historical information about the company to rate how secure the user's data will be."
            utilities="React Js, Node, Express, MongoDB, OpenAI's GPT-3.5-Turbo-Model API"
          />
        </Col>
      </Row>
      <Row className="project-row">
        <Col
          md={5}
          className="my-auto">
          <img
            src={sonicsort}
            className="img-fluid leftHidden project-img"
            alt="Sonic Sort"
          />
        </Col>
        <Col
          md={7}
          className="project-card my-auto">
          <ProjectCard
            title="Sonic Sort"
            ghLink="https://github.com/clevermonkey16/SonicSort"
            demoLink="https://www.youtube.com/watch?v=gkRknUotKI8"
            inspiration="Music producers have a lot of sound files, and it can be a difficult to find that perfect sound that's so close but hidden within a maze of files."
            functions="Sonic Sort expediates the process of searching through sound files by searching through the user's submitted folders and finding similar sounds to the one inputted by the user."
            utilities="PyQt, MatPlotLib, Primary Component Analysis, Sound Vectorization"
          />
        </Col>
      </Row>
      <Row className="project-row">
        <Col
          md={5}
          className="my-auto">
          <img
            src={exploratorium}
            className="img-fluid leftHidden project-img"
            alt="Exploratorium"
          />
        </Col>
        <Col
          md={7}
          className="project-card my-auto">
          <ProjectCard
            title="Exploratorium"
            devpostLink="https://devpost.com/software/exploratorium-649opf"
            ghLink="https://github.com/larryz1230/Running-App"
            demoLink="https://www.youtube.com/watch?v=kgrdSv0kXtQ&t"
            inspiration="During quarantine, everyone needs a little motivation to get active."
            functions="Exploratorium generates popular attraction points near the user's location and rewards points based on the distance from the user. The user uploads an image of the destination to verify their travel, and points are then awarded."
            utilities="Android Studio, Google Maps API, XAMPP Localhost, NGROK Web Tunnel, Adobe XD"
          />
        </Col>
      </Row>
      <Row className="project-row">
        <Col
          md={5}
          className="my-auto">
          <img
            src={citizenaid}
            className="img-fluid leftHidden project-img"
            alt="CitizenAid"
          />
        </Col>
        <Col
          md={7}
          className="project-card my-auto">
          <ProjectCard
            title="CitizenAid"
            devpostLink="https://devpost.com/software/citizenaid"
            ghLink="https://github.com/tacticool1011/CitizenAid"
            demoLink="https://www.youtube.com/watch?v=xmc1YkmbiKk"
            inspiration="Homelessness and wealth inequality are huge problems in the bay area, which houses the 3rd largest homeless population in the country."
            functions="CitizenAid helps organizations, charities, and government facilities expand their outreach in order to help more citizens in a wider range."
            utilities="Android Studio, Google Maps API, LAMP stack"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
