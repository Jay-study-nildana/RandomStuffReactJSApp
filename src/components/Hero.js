import React from "react";
import { Alert } from 'reactstrap';

// import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
    <Alert color="danger">
    Random Stuff Generator App
    </Alert>    
    {/* <h6 className="mb-4">Random Stuff Generator App - 0.2.1</h6> */}
  </div>
);

export default Hero;
