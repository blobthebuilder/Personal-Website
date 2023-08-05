import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
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
