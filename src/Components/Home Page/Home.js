import { Container, Row, Col } from "react-bootstrap";
import Project from "../Projects/Project";
import React, { useEffect, useRef } from "react";

function Home() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--x", `${x}%`);
      section.style.setProperty("--y", `${y}%`);
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Container
        fluid
        className="home-section"
        ref={sectionRef}>
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
      <Project />
    </>
  );
}

export default Home;
