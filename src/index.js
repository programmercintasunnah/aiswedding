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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "./views/Index.js";
import Detail from "./views/IndexSections/Detail";
import Lokasi from "./views/IndexSections/Lokasi";

import DemoNavbar from "./components/Navbars/DemoNavbar";
import CardsFooter from "./components/Footers/CardsFooter";

ReactDOM.render(
  // <ThemeProvider theme={itam}>
  //   <>
  //     <GlobalStyles />
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/bacadetail">
        <DemoNavbar />

        <Detail />

        <CardsFooter />
      </Route>
      <Route path="/lokasi">
        <DemoNavbar />

        <Lokasi />

        <CardsFooter />
      </Route>
    </Switch>
  </BrowserRouter>,
  //   </>
  // </ThemeProvider>
  document.getElementById("root")
);
