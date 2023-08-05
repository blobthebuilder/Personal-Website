import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import toster from "../../Assets/toster.png";
import exploratorium from "../../Assets/exploratorium.png";
import citizenaid from "../../Assets/citizenaid.png";

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
            description="TOS-ter is a dynamic project designed to streamline the comprehension of lengthy and convoluted Terms of Service (TOS) agreements. Leveraging state-of-the-art language models, the app excels at summarizing complex documents into clear and concise bullet points, making it easier for users to understand the essential terms without getting bogged down in legal jargon.

            Our primary inspiration behind TOS-ter was the prevalent habit of glossing over TOS agreements without fully grasping their implications. To address this, we aimed to develop a user-friendly tool that empowers individuals to make well-informed decisions about the services they engage with.
            
            Built with a comprehensive MERN stack, TOS-ter seamlessly integrates frontend and backend components. We employed React Js to create an intuitive and visually appealing user interface. On the backend, Node and Express were utilized to establish robust RESTful APIs, and MongoDB serves as a reliable database for data management.
            
            Through TOS-ter, we strive to foster transparency and put the power back into the hands of users, enabling them to understand and evaluate their data's safety when interacting with various applications. By condensing intricate agreements and providing valuable insights, our project seeks to promote informed decision-making and an enhanced digital experience for all users."
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
            description="Introducing Exploratorium - an app crafted to motivate athletes and fitness enthusiasts during pandemic times, where conventional exercises have become challenging due to digital limitations. Our app not only addresses the need for physical well-being but also tackles the growing obesity problem in America. By incentivizing users to explore their local neighborhoods, Exploratorium encourages outdoor activities and fosters a healthier lifestyle.

            Here's how it works: users begin by selecting their home location. The app then generates popular attraction points nearby, enticing users to venture further from home for higher point rewards. As they explore, users can capture memories of their destinations by uploading images, earning additional points when approved. These points can later be exchanged for a variety of enticing prizes.
            
            Developed through Android Studio and heavily relying on the Google Maps API, Exploratorium incorporates features like markers and coordinates for seamless navigation. The backend operates on a xampp localhost with a ngrok web tunnel server, enabling functional register and login components while efficiently storing and updating user data. Adobe XD played a vital role in crafting intuitive and visually appealing user interfaces, experimenting with diverse layouts that now enhance the app's overall experience.
            
            With Exploratorium, we hope to inspire a renewed passion for fitness, engaging users to embrace outdoor exploration while fostering a stronger and healthier community. Let's journey together towards a fitter and more adventurous lifestyle!"
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
            description="
            CitizenAid, our Android app, draws inspiration from the pressing challenges of homelessness and wealth inequality in the Bay Area. Witnessing the significant homeless population despite the region's status as Silicon Valley, we were driven to create a solution that bridges the gap between those in need and available support. Our vision for CitizenAid is to empower organizations, charities, and government facilities to extend their outreach and assistance, enabling citizens to easily locate essential resources and access aid promptly.
            
            To bring our vision to life, we utilized Android Studio and Java as our primary development tools. The powerful Google Maps API played a pivotal role in providing accurate facility locations and seamless navigation for users. Through meticulous coding, we focused on writing clean and efficient code, incorporating Object-Oriented Programming (OOP) to enhance the app's organization and functionality.
            
            CitizenAid's functionality revolves around connecting users to crucial resources effortlessly. By leveraging the app's backend built on a LAMP stack, we facilitated smooth communication between the Android app and the MySQL database. Distinct requests were employed to efficiently store and retrieve data, optimizing the app's performance. CitizenAid aims to be a valuable tool, facilitating the process of accessing aid, resources, and assistance, making a positive impact in the lives of those experiencing homelessness and inequality in our community."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
