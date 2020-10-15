//this returns a view with links related to User Role

import React, { Fragment, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const APIServerDetails = () => {
  //these are api related.
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [counter, setcounter] = useState(1);
  const baseURL = "https://randomstuffgeneratorsep23.azurewebsites.net";
  const endPoint = "/api/ProjectDetails/Hi";
  const url2 = baseURL + endPoint;
  const [apimessage1, setapimessage1] = useState("api status will come here");

    //  these are related to react strap
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);    

  //does a quick API call
  async function ApiCallStuff() {
    setLoading(true);
    fetch(url2, {
      method: "GET",    
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
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>api server details</Button>        
        <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <div>
            <p>Unable to load API Server details</p>
          </div>
          </CardBody>
        </Card>
      </Collapse>        
      </div>        

      );
    return (
      <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>api server details</Button>        
        <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          <p>{ JSON.stringify(data,null,2)}</p>
          </CardBody>
        </Card>
      </Collapse>        
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
      {/* <hr /> */}
    </Fragment>
  );
};

export default APIServerDetails;
