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
import lokasi from "../Img/lokasi.jpg";
import "./style/Contact.css";

class AboutUs extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons">
          <Container>
            <img src={lokasi} className="imgcenter mt-5" alt=""></img>
          </Container>
        </section>
      </>
    );
  }
}

export default AboutUs;
