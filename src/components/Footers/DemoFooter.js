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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://jay-study-nildana.github.io/developerprofile"
                  target="_blank"
                >
                  Jay
                </a>
              </li>
              {/* <li>
                a demo web app built to work in tandem with the api server that we have
              </li> */}
              {/* <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
              {/* <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  Licenses
                </a>
              </li> */}
            </ul>
          </nav>       
          <div className="credits ml-auto">
            <span className="copyright">
              {/* © {new Date().getFullYear()},  */}
              thank you{" "}
              <i className="fa fa-heart heart" />
               {/* by Creative Tim */}
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
