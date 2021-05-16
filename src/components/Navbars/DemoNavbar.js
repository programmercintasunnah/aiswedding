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
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import imgNav from "../Foto/logo-lc.png";
// import "nav.css";
import "../../views/IndexSections/style/nav.css";
import logo from "../../views/Img/logo-bulat.png";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom imp"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              {/* <NavbarBrand className="mr-lg-5" to="/" tag={Link}> */}
              <img alt="" src={logo} imgyes width="50" />

              {/* </NavbarBrand> */}
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img alt="" src={imgNav} />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} className="nav-link-icon" to="/">
                      <i className="ni ni-collection d-lg-none mr-1" />

                      <span className="nav-link-inner--text">Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="nav-link-icon" to="/aboutus">
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About Us</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={Link}
                      className="nav-link-icon"
                      to="/aboutproduct"
                    >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        About Product
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={Link}
                      className="nav-link-icon"
                      to="/ourproducts"
                    >
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Our Products</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="nav-link-icon" to="/contact">
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contact</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;