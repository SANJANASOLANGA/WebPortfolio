import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../content_option";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import personal from "../../Assets/Projects/personal.png";
import nursery from "../../Assets/Projects/nursery.png";
import aragi from "../../Assets/Projects/aragi.png";
import hospital from "../../Assets/Projects/hospital.png";
import atm from "../../Assets/Projects/atm.png";
import profile from "../../Assets/Projects/profile.png";

function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | Projects</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={profile}
                isBlog={false}
                title="Profile for Faculty"
                description="The profile app for faculty is designed to help faculty share news and maintain student profiles. It is built with React Native and Firebase, and has features which allow users to maintain their profiles in real time, read news, and faculty contact details. The app also provides guidelines for using the app, and for giving feedback."
                ghLink="https://github.com/SANJANASOLANGA/ProfileForFaculty"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={atm}
                isBlog={false}
                title="Automated Teller Machine"
                description="Automated teller machines are a staple of modern banking. This project is a simple Automated teller machine built in Java using object-oriented programming. It has features which allow users for registration, login, logout, real-time cash deposit, withdrawal, balance inquiry, transaction history, as well as fund transfers."
                ghLink="https://github.com/SANJANASOLANGA/ATM_Project"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={hospital}
                isBlog={false}
                title="Hospital Management System"
                description="The Hospital Management System is a software application written in Python that helps maintain and run hospital operations on a day-to-day basis. It has features which allow users to register, login, logout, contact the hospital, request medical services, and maintain patients and employers in the admin sector, as well as giving feedback."
                ghLink="https://github.com/SANJANASOLANGA/HospitalMgt"             
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={aragi}
                isBlog={false}
                title="Aragi Hospital"
                description="Aragi Hospital's website is full of useful content for anyone looking for a hospital. This website is built with HTML and CSS. They provide detailed information about their services, facilities, medical packages, and even career opportunities. You can also easily find their contact information and details about their international patients program."
                ghLink="https://github.com/SANJANASOLANGA/HospitalMgtSystem"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={personal}
                isBlog={false}
                title="Sanjana' s Personal Website"
                description="Welcome to my personal website! This website exists as a means for you to find out more about me, see some of my previous projects, and get in touch if you'd like to collaborate on something. You can also find my resume here and links to my social media profiles. It's built with React and emailjs. I hope you enjoy exploring the site!"
                ghLink="https://github.com/SANJANASOLANGA/WebPortfolio"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={nursery}
                isBlog={false}
                title="EduKids"
                description="EduKids is a mobile app that gives nursery students the ability to learn and improve their knowledge simply by using the app. The app is built with React Native and Firebase. It has features which allows users to login, logout, and learn materials for alphabets, numbers, phrases, shapes, colors, as well as activities to improve knowledge."
                ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection" 
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </HelmetProvider>
  );
}

export default Projects;
