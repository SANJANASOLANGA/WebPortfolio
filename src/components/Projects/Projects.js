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
import leo from "../../Assets/Projects/leo.png";
import iot from "../../Assets/Projects/iot.jpg";
import bookstore from "../../Assets/Projects/bookstore.jpg";
import blog from "../../Assets/Projects/blog.webp";

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
            Here are a few projects I've worked recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leo}
                isBlog={false}
                title="LeoWave"
                description="LeoWave is the official mobile app developed for the Leo Club of District 306 C2, University of Sri Jayewardenepura, utilizing React Native and Firebase technologies. LeoWave features a board of officers directory for easy access to club leadership, provides information about Lions Club International, showcases ongoing and award-winning projects, and includes a contact us section for seamless communication."
                ghLink="https://github.com/SANJANASOLANGA/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={nursery}
                isBlog={false}
                title="EduKids"
                description="EduKids is a mobile app that gives nursery students the ability to learn and improve their knowledge simply by using the app. The app is built with React Native and Firebase. It has features which allows users to login, logout, and learn materials for alphabets, numbers, phrases, shapes, colors, as well as activities to improve knowledge."
                ghLink="https://github.com/SANJANASOLANGA/NurseryApp"
              />
            </Col>
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
                imgPath={personal}
                isBlog={false}
                title="Food Recipe Website"
                description="The food recipe website is developed using the MERN (MongoDB, Express.js, React, Node.js) stack. The website allows users to explore a variety of recipes, contribute their own recipes, download recipes, and engage with a user-friendly interface. It incorporates user authentication, real-time updates, and seamless data management."
                ghLink="https://github.com/SANJANASOLANGA/ReactFoodRecipe.git"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blog}
                isBlog={false}
                title="Blog App"
                description="The Blog App is a full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to register, log in, and create, read, update, and delete blog posts. The intuitive user interface ensures a smooth experience for writing and managing posts."
                ghLink="https://github.com/SANJANASOLANGA/BlogApp.git"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bookstore}
                isBlog={false}
                title="Bookstore System"
                description="The Bookstore System is a software application written in Java using OOP concepts. Its features allow users to browse and add books (eBooks and physical books) to a shopping cart, calculate total costs including shipping, and place or cancel orders. The system also maintains customer details and provides an encapsulated structure for managing book details and orders."
                ghLink="https://github.com/SANJANASOLANGA/BookStoreSystem"
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
                imgPath={iot}
                isBlog={false}
                title="IoT-based Air Quality Monitoring System"
                description="The IoT-based Air Quality Monitoring System utilizes NodeMCU ESP32, MQ-135 sensor, DHT11 sensor, and an LCD display to continuously monitor air quality parameters like temperature, humidity, and gas values (fresh air). It displays real-time data on the LCD screen for easy observation and updates the Blynk mobile app every minute, enabling remote monitoring of air quality. This system, developed using Blynk and Arduino IDE."
                ghLink="https://github.com/SANJANASOLANGA/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </HelmetProvider>
  );
}

export default Projects;
