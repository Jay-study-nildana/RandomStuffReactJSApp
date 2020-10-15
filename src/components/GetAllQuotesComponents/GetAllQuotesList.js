

import React, { Fragment, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import ButtonClickDetails from "./ButtonClickDetails";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'reactstrap';


// styles
import "../../stylecss/GetAllQuotes.css";


const GetAllQuotesList = () => {

    function ListForQuote(
        { 
            data = [],
            ItemButtonClick = (f) => f        
        }
        ) {       
        
        if (!data.dateTimeOfRun)
        return (
            <div>
                <p>It looks like the server never returned any quotes</p>
            </div>        
        );
    
        // if (!data.map)
        // return (
        //     <div>
        //         <p>Data is not a list.</p>
        //     </div>        
        // );    
    
        return (
            <div>
                <p>Total number of quotes is {data.totalQuotesReturned}</p>
                <ButtonClickDetails quoteIdentifierCompadre = {QuoteIDButtonClickDetails} /> 
                <div className="ScrollBox">
                <ListGroup>
                    {data.quoteCubes.map((quote, i) => (
                        <ListGroupItem  key={quote.quoteIdentifierCompadre}>
                            <div>
                                <p>{quote.quoteTitle}</p>
                                <Button  color="success" onClick={ () => ItemButtonClick(quote.quoteIdentifierCompadre)} > {quote.quoteIdentifierCompadre} - Tap For Details </Button >                                                        
                                {/* <p>Quote Title = {quote.quoteTitle}</p>
                                <p>Quote Content = {quote.quoteContent}</p> */}
                            </div>
                            {/* <div>
                                <p>some list manipulation</p>
                                <button onClick={ () => ItemButtonClick(quote.quoteIdentifierCompadre)} > click me</button>                        
                            </div>                         */}
                        </ListGroupItem >
                    ))}
                </ListGroup>                       
                </div>               
                {/* <div>
                  <h6>Time List Created @ {data.dateTimeOfRun}</h6>
                  <p>{data.timeZone}</p>                     
                </div>   */}
                <Alert color="success">
                  <h4 className="alert-heading">Quotes Loaded!</h4>
                  <p>
                  {data.dateTimeOfRun}
                  </p>
                  <hr />
                  <p className="mb-0">
                  {data.timeZone}
                  </p>
                </Alert>                                                          
            </div>
        );
      }    

  //these are api related.
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [counter, setcounter] = useState(1);
  const baseURL = "https://randomstuffgeneratorsep23.azurewebsites.net";
  const endPoint = "/api/Moderator/GetAllQuotes";
  const url2 = baseURL + endPoint;
  const [apimessage1, setapimessage1] = useState("api status will come here");
  const { isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();   
    //button click status message
    const [buttonclickmessage1,setbuttonclickmessage1] = useState("no button pressed yet");
    //quote id that will be send to buttonclickdetails component
    const [QuoteIDButtonClickDetails,setQuoteIDButtonClickDetails] = useState(0);    

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

  useEffect(() => {
    ApiCallStuff();
  }, []);  

    return (
  <Fragment>
      <div>
        {/* <h6>Here is the full list of Quotes</h6>
        <hr></hr> */}
        <ListForQuote 
        data = {data} 
        ItemButtonClick = {id => {
            setbuttonclickmessage1("You pressed a list button" + id);
            setQuoteIDButtonClickDetails(id);
        }}        
      />        
    </div>
    <hr />
</Fragment>    

);

};

export default GetAllQuotesList;