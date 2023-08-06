import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import introImg from "../../Assets/gym.jpg";

function Home() {
  return (
    <>
      <Container
        fluid
        className="home-section">
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 className="heading">Hey, I'm</h1>
              <h1 className="main-name">
                <span>Frank Wang</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className="intro-section">
        <Row className="home-intro">
          <h1 className="intro">I AM A...</h1>
          <Type />
          <Col
            md={8}
            style={{ paddingTop: "2rem" }}>
            <h1>A Quick Introduction</h1>
            <p className="intro-body">
              I'm a student at the{" "}
              <span className="brown">
                University of California, Santa Barbara,
              </span>{" "}
              majoring in computer science.
            </p>
            <p className="intro-body">
              I played with Scratch in middle school, but I really started
              coding in high school. Since then, I think I've learned a few
              things, at least...
            </p>
            <p className="intro-body">
              I'm still exploring this exciting field, so I've worked on a
              variety of projects, including{" "}
              <span className="brown">
                Unity games, AI, ML, computer vision, web, and app development.
              </span>
            </p>
            <p className="intro-body">
              Some of my proudest moments in computer science have been getting
              2nd place in a hackathon for TOS-ter, finishing my
              sound-classification app with my friends, and solving 100 Leetcode
              problems for the first time!
            </p>
            <p className="intro-body">
              To veterans in the field, these are probably small achievements,
              but to me, they are the experiences along the way that make
              computer science so much fun. I look forward to many more compiler
              errors!
            </p>
          </Col>
          <Col md={4}>
            <img
              src={introImg}
              alt="Intro"
              className="img-fluid intro-img"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
