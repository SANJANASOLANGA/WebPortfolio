import React, { useState, useEffect } from "react";
import { Container,Row, Col, Alert } from "react-bootstrap";

function Contact() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
      <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href="mailto:sanjanasolangaarachchi@gmail.com">
              sanjanasolangaarachchi@gmail.com
              </a>
              <br />
              <br />
                <p>
                  <strong>Phone: +94719640127</strong> 
                </p>
            </address>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form >
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    // value={formData.name || ""}
                    type="text"
                    required
                    // onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    // value={formData.email || ""}
                    required
                    // onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                // value={formData.message}
                // onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                {/* <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col> */}
              </Row>
            </form>
          </Col>
        </Row>        
      </Container>
    </div>
  );
}

export default Contact;
