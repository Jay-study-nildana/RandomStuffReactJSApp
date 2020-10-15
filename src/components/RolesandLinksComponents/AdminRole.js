//this returns a view with links related to User Role

import React, { Fragment, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AdminRole = () => {
  //these are api related.
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [counter, setcounter] = useState(1);
  const baseURL = "https://randomstuffgeneratorsep23.azurewebsites.net";
  const endPoint = "/api/Admin/Hi";
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
            <p>You dont have Admin Role Privileges</p>
        </div>
      );
    return (
      <div>
        {/* <p>{data.listOfResponses[0]}</p> */}
        <p>{data.listOfResponses[1]}</p>
        <p>Available links and facilities below</p>
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

export default AdminRole;
