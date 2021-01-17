//this is the welcome to my quotes component
//here, I will put stuff that I want to share with all logged in users.

import React, { Fragment } from "react";
//import MyQuotesWelcome from "../components/MyQuotesWelcome";
import RolesandLinks from "./RolesandLinks";

const MyQuotesWelcome = () => (

  <Fragment>
      <div>
        <h4>your quotes</h4>
        <p>Your user levels will be shown here.</p>
    </div>
    <hr />
    <RolesandLinks />

</Fragment>    

);

export default MyQuotesWelcome;