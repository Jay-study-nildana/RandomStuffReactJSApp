import React, { useState, Fragment } from "react";
import { Alert, Button } from "reactstrap";
import Fetch from "../NetworkComponents/Fetch";

//TODO - is there a better solution for this, then forcing a trigger based on 
//forcing triggerapi to change? find out.

//Note about 'triggerapi'
//the entire network call process depends on state change
//now, in this component, nothing actually changes because i am calling the same endpoint
//again and again
//Hence, a state agent called 'triggerapi' has been defined
//this triggerapi is changed on button click
//that triggerapi in turn is pushed all the way to useFetch
//where triggerapi is one of its state dependencies and triggers a API call

interface RandomQuoteHelperProps {
  triggerapi: string;
  helloone?: string;
}

export interface QuoteDetailsData {
  quoteIdentifierCompadre: string;
  operationSuccessful: boolean;
  detailsAboutOperation: string;
  generalAPIResponse: GeneralAPIResponse;
  quoteIdentifierString: string;
  quoteAuthor: string;
  quoteContent: string;
}

export interface GeneralAPIResponse {
  listOfResponses: string[];
  dateTimeOfResponse: Date;
  operationSuccessful: boolean;
  detailsAboutOperation: string;
}


interface QuoteDetailsProps {
  data: QuoteDetailsData;
}

// this is a raw network call. kept here for educational purposes.
// function RandomQuoteHelperRaw({ triggerapi }: RandomQuoteHelperProps) {

//   // const [data, setData] = useState();
//   const baseURL = "https://localhost:44372";
//   const endPoint = "/api/UserNotLoggedIn/GetHoldOfthem";
//   const url2 = baseURL + endPoint;

//   console.log("inside RandomQuoteHelper + " + triggerapi);

//   const { loading, data, error } = useFetch(
//     url2
//   );

//   if (loading) return <h1>loading...</h1>;
//   if (error)
//     return <pre>{JSON.stringify(error, null, 2)}</pre>;

//   if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

//   return null;
// }

//this depends on useFetch, which takes care of the raw network details.
//// this directly consumes useFetch. kept here for educational purposes.
//its better than using RAW calls but a better solution is used in this file.
// function RandomQuoteHelperuseFetch({ triggerapi }: RandomQuoteHelperProps) {

//   //TODO - these things should be coming from a config file
//   const baseURL = "https://localhost:44372";
//   const endPoint = "/api/UserNotLoggedIn/GetHoldOfthem";
//   var url2 = baseURL + endPoint;

//   console.log("inside RandomQuoteHelper" + triggerapi);

//   const { loading, data, error } = useFetch(
//     url2, triggerapi
//   );

//   //TODO - we need to use the other loading option that we already have.
//   if (loading) return <h1>loading...</h1>;
//   //TODO - we need a better error catcher.
//   if (error)
//     return <pre>{JSON.stringify(error, null, 2)}</pre>;

//   if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

//   return null;
// }

//this is our final form of making API calls
//this is the first high level of caller
//the second level is the one that handles errors and loading and such things.
//the third level is the useFetch which actually makes the raw web call
function RandomQuoteHelper({ triggerapi }: RandomQuoteHelperProps) {
  //TODO - these things should be coming from a config file
  const baseURL = "https://localhost:44372";
  const endPoint = "/api/UserNotLoggedIn/GetHoldOfthem";
  var url2 = baseURL + endPoint;
  //manually set the request type
  const setrequesttype = "GET";

  console.log("inside RandomQuoteHelper" + triggerapi);

  return (
    <Fetch 
      uri={url2} 
      renderSuccess={QuoteDetails} 
      triggerapi={triggerapi} 
      setrequesttype = {setrequesttype}/>
  );
}

function QuoteDetails({ data }: QuoteDetailsProps) {

  var quoteIdentifierString = "";
  if (data.quoteIdentifierString == null) {
    quoteIdentifierString = "identifier string not available for this quote";
  }
  else{
    quoteIdentifierString = data.quoteIdentifierString;
  }

  return (
    <div className="RandomQuoteBox">
      <Alert color="primary">
        <p color="primary">{data.quoteAuthor}</p>
      </Alert>
      <Alert color="success">
        <p>{data.quoteContent}</p>
      </Alert>
      <hr></hr>
      <p>{data.generalAPIResponse.dateTimeOfResponse}</p>
      <p>{quoteIdentifierString}</p>
    </div>
  );
}

const RandomQuote = () => {
  console.log("inside RandomQuote");
  const [triggerapi, settriggerapi] = useState("hello");

  function changetriggerapi() {
    console.log("inside showQuote");
    if (triggerapi === "bird") {
      console.log("inside with bird. changing to hello");
      settriggerapi("hello");
    } else {
      console.log("inside with hello. changing to bird");
      settriggerapi("bird");
    }
  }
  const buttondisplaystring = "get a random quote";
  return (
    <Fragment>
      <RandomQuoteHelper triggerapi={triggerapi} />
      <Button color="primary" onClick={changetriggerapi}>
        {buttondisplaystring}
      </Button>
    </Fragment>
  );
};

export default RandomQuote;
