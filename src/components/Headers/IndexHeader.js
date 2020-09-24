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
// import React from "react";
import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

//my custom components
import GetAndDisplayQuote from "../RandomStuffGenerator/GetAndDisplayQuote.js";

// core components

function IndexHeader() {

  const [data, setData] = useState("batman");  
  
  return (
    <>
      <div
        // className="page-header section-dark"
        //adjust the color in this class for a color of your choice
        className="page-header section-random-stuff-generator"
        // style={{
        //   backgroundImage:
        //     "url(" + require("assets/img/slothimage1.jpg") + ")",
        // }}
      >
        {/* <div className="filter" /> */}
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* <h1 className="presentation-title">Auth0 Token React JS App</h1> */}
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
              {/* <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
            </div> 
            {/* <GetAndDisplayQuote getNewQuote = "ddddefi"/>                         */}
            <Col className="ml-auto mr-auto" md="8">
              {/* <h2 className="title">Let's talk product</h2> */}
              {/* <h2 className="presentation-random-stuff-generator text-center">
                Lets get a Quote
              </h2> */}
              <br></br>
              
              {/* <h5 className="description"> */}
              {/* <h5 className="description-random-stuff-generator">
                Tap the button to get a random quote from our random quote api
                <GetAndDisplayQuote getNewQuote = "ddddefi"/>
              </h5> */}
              <GetAndDisplayQuote getNewQuote = {data}/>              
              <br />
              <Button
                className="btn-round"
                color="info"
                // href="#pablo"
                onClick={(e) => 
                  {
                    // e.preventDefault();
                    console.log("quote button tapped");
                    if(data == "batman")
                    {
                      setData("robin");
                    }
                    else
                    {
                      setData("batman");
                    } 

                  }

                }
              >
                Tap To Quote
              </Button>
              <h2 className="presentation-random-stuff-generator text-center">
              <p>a demo react js app built to work with the <a
                  href="https://github.com/Jay-study-nildana/RandomStuffGeneratorPrivate"
                  target="_blank"
                  color = "#007bff"
              >
                random stuff
              </a> api server </p>
              </h2>              
            </Col>                               
            <br></br>
            <br></br>
            <br></br>
            <br></br>            
            {/* <Row>
            <h2 className="presentation-subtitle text-center">
              <p>a demo react js app built to work with the <a
                  href="https://github.com/Jay-study-nildana/RandomStuffGeneratorPrivate"
                  target="_blank"
                  color = "#007bff"
              >
                random stuff
              </a> api server </p>
            </h2>   
            </Row>  */}
          </Container>
        </div>
        {/* <div className="section text-center"> */}
        {/* <div className="text-center">
          <Container> */}
            {/* <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row> */}
            {/* <br />
            <br /> */}
            {/* <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row> */}
          {/* </Container>
        </div>         */}
        {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        /> */}
        {/* <h6 className="category category-absolute">
          Coded by{" "}
          <a
            href="https://jay-study-nildana.github.io/developerprofile"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            />
            Jay
          </a>
        </h6> */}
      </div>
    </>
  );
}

export default IndexHeader;
