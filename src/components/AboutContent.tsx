//this is the welcome to my quotes component
//here, I will put stuff that I want to share with all logged in users.

import React, { Fragment } from "react";
import APIServerDetails from "./AboutContentComponents/APIServerDetails";

const AboutContent = () => (
<Fragment>
    <div>
        <h4>About</h4>
        <p>React JS App that works in tandem with the Random Stuff Generator API Server</p>
        <APIServerDetails />
    </div>
    </Fragment>    

);

export default AboutContent;