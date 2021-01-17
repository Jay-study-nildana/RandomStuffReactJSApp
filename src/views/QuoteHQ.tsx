import React, { Fragment } from "react";
import AllTheQuotes from "../components/QuoteCrudComponents/AllTheQuotes";
import GetSingleQuoteLifeHistory from "../components/QuoteCrudComponents/GetSingleQuoteLifeHistory";
import { NavLink as RouterNavLink } from "react-router-dom";
import { NavLink } from "reactstrap";

const welcomemessage = "Welcome to Quote HQ";
const addorupdatemessage = "Add or Update Quote";
const singlequotemessage = "get a single quote with its life history";
const seeallquotesmessage = "all quotes available to see";

const QuoteHQ = () => (



  <Fragment>
    <hr></hr>
    <div>
      <p>{welcomemessage}</p>
    </div>
    <hr></hr>
    <div>
      <p>{singlequotemessage}</p>
      <GetSingleQuoteLifeHistory />
    </div>
    <hr></hr>
    <div>
      <p>Use This Option to Update Existing Quote</p>
      <NavLink
        tag={RouterNavLink}
        to="/addorupdatedquote"
        exact
        activeClassName="router-link-exact-active"
      >
        {addorupdatemessage}
      </NavLink>
    </div>
    <hr></hr>
    <div>
      <p>{seeallquotesmessage}</p>
      <AllTheQuotes />
    </div>
    <hr></hr>
  </Fragment>
);

export default QuoteHQ;