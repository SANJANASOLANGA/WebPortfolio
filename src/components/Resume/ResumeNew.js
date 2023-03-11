import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import resume from "../../Assets/Sewmini_Sanjana_Resume.svg";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Sewmini_Sanjana_Web.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../content_option";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | Resume</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div>
        <Container fluid className="resume-section">
          {/* <Particle /> */}
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
          <Row>
            <img
              src={resume}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "850px", marginTop: 70 }}
            />
          </Row>
        </Container>
      </div>
      <Particle />
    </HelmetProvider>
  );
}

export default ResumeNew;
