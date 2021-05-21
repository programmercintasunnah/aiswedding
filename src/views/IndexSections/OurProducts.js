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
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardDeck,
  NavLink,
} from "reactstrap";
import wa from "../Img/wa.png";
import "./style/Contact.css";
import belah from "../Img/Belah.jpg";
import bulat from "../Img/Bulat.jpg";
import { Link } from "react-router-dom";
class OurProducts extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    // useEffect(() => {
    //   window.scroll(0, 0);
    // }, []);

    return (
      <>
        <section className="section section-lg">
          <Container>
            <CardDeck>
              <img src={belah} width="350" height="250" alt="" />
              <Card>
                <CardBody>
                  <CardTitle>
                    <h2>Split Betel Nut</h2>
                  </CardTitle>
                  <CardText>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Quality : </p>
                      </td>

                      <td>
                        <p className="ml-2">
                          Good Cut, Available Grade 70 % – 75%, 80%-85%, 90%-95%
                          and Low Grade
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Maturity :</p>
                      </td>

                      <td>
                        <p className="ml-2">Old / Max 3%</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Moisture :</p>
                      </td>

                      <td>
                        <p className="ml-2"> 3% – 5%</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Colour : </p>
                      </td>

                      <td>
                        <p className="ml-2">Natural Colour Without Chemical</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Note : </p>
                      </td>

                      <td>
                        <p className="ml-2">
                          Free from dead or alive insect, Dried by sun
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Packaging : </p>
                      </td>

                      <td>
                        <p className="ml-2">
                          60kg gunny bag @60kg (as per buyer request)
                        </p>
                      </td>
                    </tr>
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="mt-5">
              <img src={bulat} width="350" height="250" />
              <Card>
                <CardBody>
                  <CardTitle>
                    <h2>Whole Betel Nut</h2>
                  </CardTitle>
                  <CardText>
                    <tr>
                      <td width="75">
                        <p className="font-weight-bold">Quality : </p>
                      </td>

                      <td>
                        <p className="ml-2">
                          Good Cut , Available Grade 70 – 75%
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Maturity :</p>
                      </td>

                      <td>
                        <p className="ml-2">Old / Max 3%</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Moisture :</p>
                      </td>

                      <td>
                        <p className="ml-2">3% – 5%</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Colour : </p>
                      </td>

                      <td>
                        <p className="ml-2">Natural Colour Without Chemical</p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Note : </p>
                      </td>

                      <td>
                        <p className="ml-2">
                          Free from dead or alive insect, Dried by sun
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="100">
                        <p className="font-weight-bold">Packaging : </p>
                      </td>

                      <td>
                        <p className="ml-2">
                          60kg gunny bag @60kg ( as per buyer request )
                        </p>
                      </td>
                    </tr>
                  </CardText>
                </CardBody>
              </Card>
            </CardDeck>

            <NavLink tag={Link} href="/aboutus"></NavLink>
            {/* <NavLink
              to="wa.me/6281266719944?text=Assalamualaikum"
              // to="https://api.whatsapp.com/send/?phone=6281266719944?Assalamualaikum"
              className="waku"
              target="_blank"
              tag={Link}
            >
              <img src={wa} className="waku"></img>
            </NavLink> */}
          </Container>
        </section>
      </>
    );
  }
}

export default OurProducts;
