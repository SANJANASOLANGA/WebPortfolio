import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Sewmini_Sanjana.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  // "https://github.com/SANJANASOLANGA/WebPortfolio/raw/main/src/Assets/Sewmini_Sanjana.pdf";
  "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
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
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
          />
        </Row>
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
