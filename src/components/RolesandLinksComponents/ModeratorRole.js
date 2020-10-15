//this returns a view with links related to User Role

import React, { Fragment, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ModeratorRole = () => {
  //these are api related.
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [counter, setcounter] = useState(1);
  const baseURL = "https://randomstuffgeneratorsep23.azurewebsites.net";
  const endPoint = "/api/Moderator/Hi";
  const url2 = baseURL + endPoint;
  const [apimessage1, setapimessage1] = useState("api status will come here");
  const { isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();  

  //does a quick API call
  async function ApiCallStuff() {
    //get token
    var getThetoken = await getAccessTokenSilently();      
    setLoading(true);
    fetch(url2, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getThetoken}`,
      },      
    })
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }

  //a component to display the json contents.
  function DisplayJSONData({ data }) {
    if (!data)
      return (
        <div>
            <p>You dont have Moderator Role Privileges</p>
        </div>
      );
    return (
      <div>
        {/* <p>{data.listOfResponses[0]}</p> */}
        <p>{data.listOfResponses[1]}</p>
        <p>Available links and facilities below</p>
        {/* <p>the following does a full app reload</p>
        <a href="/get-all-quotes">See all Quotes</a>
        <p>the following does not</p> */}
        <NavLink
          tag={RouterNavLink}
          to="/get-all-quotes"
          exact
          activeClassName="router-link-exact-active"
        >
          See all Quotes
        </NavLink>        
      </div>
    );
  }

  useEffect(() => {
    ApiCallStuff();
  }, []);

  return (
    <Fragment>
      <div>
        {/* <h4>You have User Privileges</h4>
        <p>You can use the following privileges</p> */}
        <DisplayJSONData data={data} />
      </div>
      <hr />
    </Fragment>
  );
};

export default ModeratorRole;
