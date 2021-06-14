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
import ikhwan from "../Img/ikhwan_ori.png";
import akhwat from "../Img/akhwat_ori.jpg";
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
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <p className="lead">
                  اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ
                </p>
                <p className="lead">
                  Tanpa mengurangi rasa hormat, kami mengundang
                  Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami
                </p>
                <p className="lead textbesar">The Wedding Of</p>
              </Col>
              <Container>
                <Row>
                  <Col xs>
                    <img
                      src={ikhwan}
                      className="imgcenter"
                      alt=""
                      width="200"
                    ></img>
                    <p className="textcenter ia">Qois Abdurrahman</p>
                    <p className="textcenter">
                      Anak dari Bapak Rusman, Lc dan Ibu Siti Maryati
                    </p>
                  </Col>
                  <Col xs>
                    <img
                      src={akhwat}
                      className="imgcenter"
                      width="200"
                      alt=""
                    ></img>
                    <p className="textcenter ia">Aisyah Azzahrah</p>
                    <p className="textcenter">
                      Anak dari Bapak Parno, S.Pd dan Ibu Nur Amalia
                    </p>
                  </Col>
                </Row>
              </Container>
              <Container>
                <p className="textcenter textbesar">Save Date</p>
                <Row>
                  <Col xs>
                    <p className="textcenter ia">Akad</p>
                    <p className="textcenter">Jum'at, 20 Agustus 2021</p>
                    <p className="textcenter">Pukul 09.00 WIB</p>
                  </Col>
                  <Col xs>
                    <p className="textcenter ia">Resepsi</p>
                    <p className="textcenter">Ahad, 22 Agustus 2021</p>
                    <p className="textcenter">Pukul 10.00 WIB</p>
                  </Col>
                </Row>
                <p className="textcenter">di Gg. Domo, Kampar Barat.</p>
              </Container>
              <Col className="text-center mt-5" lg="8">
                <p className="lead">
                  وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ
                  أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                  مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ
                  يَتَفَكَّرُونَ
                </p>
                <p className="lead">
                  Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                  untukmu isteri-isteri dari jenismu sendiri, supaya kamu
                  cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                  diantaramu rasa kasih dan sayang. Sesungguhnya pada yang
                  demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                  berfikir. (Ar-Rum : 21)
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
