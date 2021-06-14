/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import bg from "../Img/bg-wedding.jpg";
import "./style/Contact.css";
import "./style/hero.css";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero xxx section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <img src={bg} alt="" className="heroimage"></img>
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0 py-0 divhero">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="15">
                    <h1 className="tf0 font-weight-bold texthero1">
                      CELEBRATING
                    </h1>

                    <div className="mt-2">
                      <h1 className="tf1 font-weight-bold mb-0 texthero2">
                        The Wedding Of
                      </h1>
                    </div>
                    <div className="mt-2">
                      <h1 className="tf mb-0 texthero3">Qois & Aisyah</h1>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon className="fill-white" points="0 0 2560 100 0 0" />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
