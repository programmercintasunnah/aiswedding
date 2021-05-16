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
import bg from "../Img/gudang.jpg";
import "./style/Contact.css";
import "./style/hero.css";

class HeroOurProducts extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section xxx section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <img src={bg} alt="" className="heroimagecontact"></img>

              {/* <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" /> */}
            </div>
            {/* <Container className=""> */}
            <div className="col px-0 py-0 divherocontact">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="10">
                  <h1 className="text-white font-weight-bold mt-5 th1">
                    OUR PRODUCTS
                  </h1>
                </Col>
              </Row>
            </div>
            {/* </Container> */}
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

export default HeroOurProducts;
