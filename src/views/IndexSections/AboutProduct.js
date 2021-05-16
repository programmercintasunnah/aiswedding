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
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import img1 from "../Img/Belah.jpg";
import img2 from "../Img/Bulat.jpg";
import bg2 from "../Img/bghp.jpg";
import "./style/hero.css";

const items = [
  {
    src: img1,
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: img2,
    altText: "",
    caption: "",
    header: "",
  },
];

class AboutProduct extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <h1 className="text-black font-bold text-center display-3 mb-5">
          About Product
        </h1>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default x1">
            <img src={bg2} alt="" className="imagecenter"></img>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">About Product</h1>
                <p className="lead text-white mt-4">
                  Areca trees are planted to be used for seeds and stems. Areca
                  nut which has a bitter taste, contains alkoloides such as
                  arekaina (arecaine) and arekolina (arecoline) which are toxic
                  and addictive. Some of the important compounds in betel nuts
                  include arecaidine, arecolidine, guvacoline, guracine
                  (guacine).
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  tag={Link}
                  to="/ourproducts"
                >
                  Detail Product
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right br1">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              {/* <polygon className="fill-white" points="2560 0 2560 100 0 100" /> */}
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default AboutProduct;
