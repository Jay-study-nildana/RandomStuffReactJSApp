//this returns a view with links related to User Role

import React, { Fragment, useEffect, useState } from "react";
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';

// styles
import "../../stylecss/RandomQuote.css";

const SimpleButton = ({
    ApiCallStuff = (f) => f,
  }) => (
    <div>
      <Button color="primary" onClick={ApiCallStuff}> get a random quote</Button >
    </div>
  );

const RandomQuote = () => {


  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);  

  //these are api related.
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [counter, setcounter] = useState(1);
  const baseURL = "https://randomstuffgeneratorsep23.azurewebsites.net";
  const endPoint = "/api/UserNotLoggedIn/GetHoldOfthem";
  const url2 = baseURL + endPoint;
  const [apimessage1, setapimessage1] = useState("api status will come here");

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
            <p>Unable to contact API Server</p>
        </div>
      );
    return (
      <div className="RandomQuoteBox">
        <Alert color="primary">
            <p Alert color="primary">{data.quoteTitle}</p>
        </Alert> 
        <Alert color="success">
            <p>{data.quoteContent}</p>
        </Alert>             
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
        <SimpleButton
          ApiCallStuff={() => {
            ApiCallStuff();
          }}
        />
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
        Login for a better experience
        </Alert>        
      </div>
      <hr />
    </Fragment>
  );
};

export default RandomQuote;
