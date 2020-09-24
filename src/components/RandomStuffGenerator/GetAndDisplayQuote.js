//This is a simple display component
//It does the following

//1. It calls the random API endpoint and gets a random quote
//2. puts that in the display text
//3. returns a ready to use component that shows the generate quote

//Essentially, my logic here is as follows.

//the component/hook (I am still learning the differences) GetAndDisplayQuote
//takes in one variable getNewQuote
//everytime that variable changes, a rerender happens
//in most cases, this will be a search string or a id or something that we would be searching for 

//in my case, I am not doing anything here. I just want to know that the user
//where this component was called, has triggered this

//the trigger itself in the called component is done in a simple way 
//I have a button that is linked to a onClick
//at the beginning i am calling the data as 'batman'
//then, when the click happens, it checks the current state of data
//if it is batman, it changes it to robin
//if it is robin, then it changes to batman
//ultimately, what it changes into is irrevalent. there any number of strategies in which a change
//can be triggered. I am just using this method. 

//so, once that trigger happens and we reach here.
//aftere the default render, useEffect gets called
//i simply call my API server
//i have the standard error and responses which is the same for any API call.
//if it is successfull, we got to the about to be re rendered return
//here, I update my paragraph with the new value from the API json response
//and that gets rendered in the caling component.

import React, { useState, useEffect } from "react";

// const url1 = "https://baribasicidentityapiserverjuly28th2020b.azurewebsites.net/api/HelloWorld/TestService";
const url2 = "https://randomstuffgeneratorsep23.azurewebsites.net/api/RandomQuotes/GetHoldOfthem";

//Here, you have this thing 

function GetAndDisplayQuote(
    { getNewQuote }
    )
{
    //these are the different data state variable

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    //to be called after the initial rendering is done.
    useEffect(() => {
        setLoading(true);
        fetch(url2,{
          method: "GET",
        })
          .then(data => data.json())
          .then(setData)
          .then(() => {
              setLoading(false);
              console.log("data obtained");
            })
          .catch(setError);
      }, [getNewQuote]);
    
      if (loading) return <>
                            {/* <h1>loading...</h1> */}
                            <i className="fa fa-refresh fa-spin fa-3x fa-fw margin-bottom getAnddisplayquote-random-stuff-generator"></i>                                    
                          </>;
      if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
      if (!data) return null;    

    return ( 
        <div className="GetAndDisplayQuote getAnddisplayquote-random-stuff-generator">
        {/* <p>Quote Title</p>
        <p>Quote Sentence</p> */}

        <h4>{data.quoteTitle}</h4>
        <br></br>
        <p>{data.quoteContent}</p> 

      </div>        
    );
}

export default GetAndDisplayQuote;