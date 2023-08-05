import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import gym from "../Assets/gym.jpg";

function About() {
  return (
    <Container
      fluid
      className="about-section">
      <Col className="about-heading">
        <h1 className="about-heading-text">ALL</h1>
        <h1 className="about-heading-text">About</h1>
        <h1 className="about-heading-text">Me</h1>
      </Col>
      <Row className="about-content">
        <Col md={8}>
          <h1 className="about-subheading">Professionally, I'm...</h1>
          <p className="about-text">
            Currently a Computer Science major at UCSB.
          </p>
          <p className="about-text">
            I've participated in several hackathons, and recently placed for the
            first time! My other projects include classifying similar sound
            files, game development, and a League of Legends champion
            recommender.
          </p>
          <p className="about-text">
            Through these various projects, I've mastered numerous skills, most
            importantly the ability to quickly learn new technologies.
          </p>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row className="about-content">
        <Col
          md={4}
          style={{ padding: "2rem 4rem" }}>
          <img
            src={gym}
            alt="Gym"
            className="img-fluid"
          />
        </Col>
        <Col md={8}>
          <h1 className="about-subheading">Privately, I'm...</h1>
          <p className="about-text">
            Running, hitting the gym, and playing games are my go-to outlets for
            staying active and having fun.
          </p>
          <p className="about-text">
            My proudest personal achievements are a 4:54 mile time, benching 155
            pounds, and (don't laugh) reaching Diamond rank in Valorant (I know
            you're laughing).
          </p>
          <p className="about-text">
            I like hamborgas, chicken nuggies, and noodles, and I really,
            really, REALLY, do not like small dogs because they are entitled
            pricks that bark too much. No offense if you have one of those
            gremlins.
          </p>
        </Col>
      </Row>
      <Row className="about-content">
        <Col md={8}>
          <h1 className="about-subheading">What's Next?</h1>
          <p className="about-text">
            I DEFINITELY am getting an internship next summer (I hope). LA hacks
            is also around the corner, so I'm looking forward to doing that with
            friends. I also want to top my last year's data science project and
            dive deeper into the field of machine learning.
          </p>
          <p className="about-text">
            Beyond academics, I aim to run a 1-hour 30-minute half marathon.
            This will be my first ever race longer than 3 miles.
          </p>
          <p className="about-text">
            These goals may seem ambitious, but I'm ready to put in the hard
            work it takes to turn them into reality. Wish me luck!
          </p>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}

export default About;
