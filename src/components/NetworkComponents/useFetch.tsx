
import { useState, useEffect } from "react";

//Note about 'something'
//the something parameter here is primarily for the usage of 
//RandomQuote component which sends the same uri every time
//in order to trigger this useFetch, i send RandomQuote's trigger 
//agent, i.e. something 

//Update on 'something'
//it has another use as of now. 
//I am also using it to indicate that a call is authorized
//and hence, a check for token must be done before we make a network call
//if the token is undefined aka empty
//no point in making a network call which is bound to fail anyway

//TODO update useFect also to use a TypeScript type.
//already I am enforcing types.
//but, I mean to say, a TypeScript class

//something is not mandatory as it is not needed in all calls
//same with token. many calls dont need token as they are part of the 
//public portion sof the website.

//TODO upgrade this to work with response codes. 
//like 200. 
//and also 403 Forbidden. 
//for example, when the user does not have authorization
//it keeps falling back to loadingFallback = <p>---</p>, in Fetch.tsx
//we need to be able to look at response codes and accordingly build our responses.

//readytoroll is another option to stop the usual react based triggers from
//triggering a network call when the code is not ready
//it was introduced in 0.3.0 when POST calls with body were being made
//anytime the user input was changed, the json body object was of course updated
//however, because body is included in the useFetch component useEffect
//network calls were being trigger. readytoroll stops that.

//TODO here also, I want typescript interface being used.
export function useFetch(uri: string, something?: string, getThetoken?: any,
  setrequesttype?: string, body?: any, triggerapi?: string, readytoroll?: boolean) {
  console.log("inside useFetch");
  console.log("useFetch - URI " + uri);
  console.log("useFetch - something " + something);
  console.log("useFetch - getThetoken " + getThetoken);
  console.log("useFetch - setrequesttype " + setrequesttype);
  console.log("useFetch - body " + body);
  console.log("useFetch - triggerapi " + triggerapi);
  console.log("useFetch - readytoroll " + readytoroll);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  //by default we assume a GET request
  var requesttype = "GET";

  if (setrequesttype !== undefined) {
    console.log("useFetch - requesttype has been changed to " + setrequesttype);
    requesttype = setrequesttype;
  }

  useEffect(() => {
    console.log("inside useFetch useEffect");
    console.log("inside useFetch useEffect uri " + uri + " something " + something + " token " + getThetoken);
    if (!uri) return;
    if (something === "authorized" && !getThetoken) return;
    if (readytoroll === false) return;
    fetch(uri, {
      method: requesttype,
      headers: {
        Authorization: `Bearer ${getThetoken}`,
        'Content-Type': 'application/json'
      },
      body: body,
    }
    )
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri, something, getThetoken, requesttype, triggerapi, body,readytoroll]);

  return {
    loading,
    data,
    error
  };
}