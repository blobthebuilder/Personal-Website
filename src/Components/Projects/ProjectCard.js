import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Row } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <Row>
            <span className="card-subheading">Inspiration: </span>
            <span className="card-text">{props.inspiration}</span>
          </Row>
          <Row>
            <span className="card-subheading">What It Does: </span>
            <span className="card-text">{props.functions}</span>
          </Row>
          <Row>
            <span className="card-subheading">Uses: </span>
            <span className="card-text">{props.utilities}</span>
          </Row>
        </Card.Text>
        <div class="align-top">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
          {"\n"}
          {"\n"}
          {props.devpostLink && (
            <Button
              variant="primary"
              href={props.devpostLink}
              target="_blank"
              style={{ marginLeft: "10px" }}>
              <CgWebsite /> &nbsp;
              {"Devpost"}
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}>
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
