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
import { Link, NavLink } from "react-router-dom";

// reactstrap components
import {
  Container,
  CardDeck,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row,
} from "reactstrap";

import bg2 from "../Img/bg2.jpg";
import wa from "../Img/wa.png";
import "./style/Contact.css";
import logo from "../Img/logo-lc.png";

class ContactDua extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped">
          <div className="shape ">
            <img src={bg2} alt=""></img>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <Container>
            <CardDeck>
              <Card>
                <CardBody>
                  <CardTitle>
                    {/* <h1>Contact Us</h1> */}
                    <p className="display-4 mt-2">HARVEST LUCRETIA</p>
                    <p className="display-5">PT. PUTRA AFIN PRATAMA</p>
                  </CardTitle>
                  <CardText>
                    <div class="row">
                      <div className="col">
                        <img src={logo} width="350" height="250" />
                      </div>
                      <div class="col">
                        <p className="display-5">Address : </p>
                        <p className="display-5">Office</p>
                        <tr>
                          <td>
                            <i className="fa fa-map-marker fa-2x mr-2"></i>
                          </td>

                          <td>
                            <p className="ml-5">Jl. Kutilang Ujung No.07</p>
                            <p className="ml-5">
                              Kp. Melayu, Kec. Sukajadi, Kota Pekanbaru, Riau
                              28122
                            </p>
                          </td>
                        </tr>
                      </div>
                      <div class="col">
                        {" "}
                        <p className="display-5">Warehouse</p>
                        <tr>
                          <td>
                            <i className="fa fa-map-marker fa-2x mr-2"></i>
                          </td>
                          <td>
                            <p>
                              Desa Tangkit, Kec. Sungai Gelam, Muaro Jambi -
                              Jambi
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-phone-square fa-2x mr-2"></i>
                          </td>
                          <td>
                            <p>+62 812-6671-9944</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-envelope-open fa-2x mr-2"></i>
                          </td>
                          <td>
                            <p>harvestlucretia@gmail.com</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-instagram fa-2x mr-2"></i>
                          </td>
                          <td>
                            <p>
                              {/* <a
                    href="https://www.instagram.com/harvest.luc/"
                    target="_blank"
                  > */}
                              @harvest.luc
                              {/* </a> */}
                            </p>
                          </td>
                        </tr>
                      </div>
                    </div>
                    <Row>
                      <Col></Col>
                    </Row>
                    <Row>
                      <Col></Col>
                    </Row>
                  </CardText>
                </CardBody>
                {/* <CardFooter>
                  <i className="fa fa-facebook fa-2x mr-2"></i>
                  <span> Sunnah Dev</span>
                  <i className="fa fa-instagram fa-2x ml-5 mr-2"></i>
                  <span>@harvest.luc</span>
                </CardFooter> */}
              </Card>
            </CardDeck>
            <a
              // to="wa.me/6281266719944?text=Assalamualaikum"
              href="https://api.whatsapp.com/send/?phone=6281266719944?Assalamualaikum"
              className="waku"
              target="_blank"
              tag={Link}
            >
              <img src={wa} className="waku" alt=""></img>
            </a>
          </Container>
        </section>
      </>
    );
  }
}

export default ContactDua;
