/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  // Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Jay"
          >
            Random Stuff React JS App
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <NavItem>
              <NavLink
                data-placement="bottom"
                href="/index"
                target=""
                title="home"
              >
                <i className="fa fa-bicycle" />
                <p className="d-lg-none">home</p>
              </NavLink>
            </NavItem>            
            {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href="/landing-page"
                target=""
                title="add quote"
              >
                <i className="fa fa-shower" />
                <p className="d-lg-none">add quote</p>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/Jay-study-nildana/RandomStuffReactJSApp"
                target="_blank"
                title="App Code on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">App Code on GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/Jay-study-nildana/RandomStuffGenerator"
                target="_blank"
                title="Random Stuff API Server"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">Random Stuff API Server</p>
              </NavLink>
            </NavItem>            
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://jay-study-nildana.github.io/developerprofile"
                target="_blank"
                title="contact developer"
              >
                <i className="fa fa-address-card" />
                <p className="d-lg-none">contact developer</p>
              </NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
