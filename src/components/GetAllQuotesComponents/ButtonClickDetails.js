//TODO - this needs some major retooling with lots of functions that should be moved to separate components.

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const SimpleButton = (
    {
        ApiFunction1 = f => f,
    }
    ) => (
        <div>
            <button onClick = {ApiFunction1}> Specific Quote</button>
        </div>

        
    );

function ButtonClickDetails(
    {
        quoteIdentifierCompadre
    }
    ){


    const baseURL = "https://randomstuffgeneratorsep23.azurewebsites.net";
    const endPoint = "/api/User/GetASpecificQuote";
    const url2 = baseURL + endPoint;        
    // const url2 = "https://randomstuffgeneratorsep23.azurewebsites.net/api/RandomQuotes/GetHoldOfthem"; 
    //these are api related.
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [apimessage1,setapimessage1] = useState("api status will come here");    
    const { isAuthenticated, logout, user, getAccessTokenSilently } = useAuth0();     

    // useEffect( () => {

    //     if(loading)
    //     {
    //         setapimessage1("api is now loading");
    //         setData("-");
    //     }
    //     else
    //     {
    //         setapimessage1("api has finished to completion");
    //     }
    
    // },[loading]);    

    useEffect(() => {
        ApiCallStuff();
      }, quoteIdentifierCompadre);    

      function DisplayJSONData({ data }) {
        if (!data)
          return (
            <div>
                <p>loading data...</p>
            </div>
          );
        return (
          <div>
            {/* <div>
                <p>Your Quote details below</p>
                <p>{data.quoteCube.quoteIdentifierCompadre}</p>
                <p>{data.quoteCube.quoteTitle}</p>
                <p>{data.quoteCube.quoteContent}</p>
            </div> */}
            <Card body inverse color="info" className="QuoteDetailBox">
                <CardTitle>{data.quoteCube.quoteTitle}</CardTitle>
                <CardText>{data.quoteCube.quoteContent}</CardText>
                <CardText>{data.quoteCube.quoteIdentifierCompadre}</CardText>                
                {/* <Button color="secondary">Button</Button> */}
            </Card>            
          </div>
        );
      }      

    async function ApiCallStuff()
    {
        const quoteIdentifier = quoteIdentifierCompadre;
        const postbody = JSON.stringify( {quoteIdentifier});
        //get token
        var getThetoken = await getAccessTokenSilently();        
        setLoading(true);
        fetch(url2,
            {
                method: "POST",
                body : postbody,
                headers: {
                  Authorization: `Bearer ${getThetoken}`,
                  "Content-Type": `application/json`,
                },
              }
        ).then(data => data.json())
        .then(setData)
        .then( () => setLoading(false) )
        .catch(setError);
    }        

    if(quoteIdentifierCompadre==0)        
    {
        return (
            <div className = "QuoteShowOnClick">
                <p>Select a quote below</p>
            </div>
        );        
    }

    return (
        <div className = "QuoteShowOnClick">
            <hr></hr>
            {/* <p>This is ButtonClickDetails Component</p> */}
            {/* <p>The quote you sent is {quoteIdentifierCompadre}</p> */}
            {/* <SimpleButton
                ApiFunction1 = {
                    () => {
                        ApiCallStuff();
                    }
                }                                
            />             */}
            {/* <p>{apimessage1}</p> */}
            {/* <p>api data will come below </p> */}
            {/* <p>{ JSON.stringify(data,null,2)}</p>
            <p>{JSON.stringify(error, null, 2)}</p>   */}

            <DisplayJSONData data={data} />                      
        </div>
    );
}

export default ButtonClickDetails;