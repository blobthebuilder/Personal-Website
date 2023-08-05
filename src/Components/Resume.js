import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function Resume(props) {
  const pdfUrl =
    "https://docs.google.com/document/d/e/2PACX-1vQmu3hfF3VF4cRbLJZWxtPlxC4uRqOHirxZzDK6fCgku2JWj4oKTlOONA12vEOf6raGag4XIXNSr3NX/pub";
  const pdfDownload =
    "https://docs.google.com/document/d/1Yux7S39W2xPhnew9R_Z0xt4KFDzXRQysKKX0iA9vaO8/export?format=pdf";

  return (
    <div className="resume-container">
      <Row
        style={{
          justifyContent: "center",
          position: "relative",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}>
        <Button
          variant="primary"
          href={pdfDownload}
          target="_blank"
          style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
      <Container
        fluid
        className="resume-section">
        <Row className="resume">
          <embed src={pdfUrl} />
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
