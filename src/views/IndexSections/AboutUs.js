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

class AboutUs extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                {/* <p className="display-3">About Us</p> */}

                <p className="lead">
                  HARVEST LUCRETIA is an exporter of Betel nuts we provide a
                  wide range of qualities and cuts to an internasional customer
                  base. Our advantage in exporting Betelnuts, we are
                  well-estabilished in exporting an dsupplying various other
                  goods and services. We was founded locally. with several full
                  time employees, we area small but we well-established company.
                  Our commitment to local farmers and our customers base is our
                  unwavering promise.
                </p>
              </Col>
              <Col className="text-center mt-5" lg="8">
                <i className="fa fa-bolt fa-5x"></i>
                <p className="display-3">Ability</p>
                <p className="lead">
                  We will provide the best quality for all customer requests by
                  prioritizing integrity, perseverance and discipline during our
                  working hours.
                </p>
              </Col>
              <Col className="text-center mt-5" lg="8">
                <i className="fa fa-shield fa-5x"></i>
                <p className="display-3">Quality</p>
                <p className="lead">
                  We provide agricultural products from within the country in
                  Indonesia and are of the best quality
                </p>
              </Col>
              <Col className="text-center mt-5" lg="8">
                <i className="fa fa-th-list fa-5x"></i>
                <p className="display-3">Visi Misi</p>
                <p className="lead">
                  MISION is to provide the best products with good quality
                  control so that they can be accepted by the wider community as
                  a necessity of life and the environment.
                </p>
                <p className="lead">
                  VISION to improve the economy and welfare of farmers and meet
                  the global need for healthier life choices from the best
                  natural products in Indonesia.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default AboutUs;
