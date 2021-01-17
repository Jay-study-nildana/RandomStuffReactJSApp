import React, { Fragment, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Fetch from "../NetworkComponents/Fetch";
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';

//note - this was built using GenerateUserAddedQuote as a template.
//a full page copy paste job.
//so some code from that might stil be present, unused or just commented out.


export interface StandardAPIData {
    listOfResponses: string[];
    dateTimeOfResponse: Date;
    operationSuccessful: boolean;
    detailsAboutOperation: string;
    quoteCubes: any;
}

interface StandardAPIProps {
    data: StandardAPIData;
}

interface UpdateExistingQuoteBody {
    quoteAuthor: string;
    quoteContent: string;
    quoteIdentifierString: string;
    optionalAdditionalNotes?: string;
}

//TODO convert this to use the typescript class
//check other places as well
// @ts-ignore
function DisplayHelper({ token, triggerapi, readytoroll, authorname, quotestring,quoteIdentifierString }) {
    console.log("inside DisplayHelper");
    console.log("inside DisplayHelper - token " + token);
    console.log("inside DisplayHelper - triggerapi " + triggerapi);
    console.log("inside DisplayHelper - readytoroll " + readytoroll);
    //TODO - these things should be coming from a config file
    const baseURL = "https://localhost:44372";
    const endPoint = "/api/Moderator/UpdateExistingQuote";
    const url2 = baseURL + endPoint;
    const something = "authorized";
    //manually set the request type
    const setrequesttype = "POST";
    const jsonresponsePlaceHolder = "No API Response to Show";

    let body: UpdateExistingQuoteBody = { quoteAuthor: authorname, quoteContent: quotestring,quoteIdentifierString:quoteIdentifierString };
    let JSONbody = JSON.stringify(body);


    if (token === undefined || readytoroll === false) {
        console.log("DisplayHelper + token is undefined.");
        console.log("DisplayHelper + ready to roll is " + readytoroll);
        return <div>
            <p>{jsonresponsePlaceHolder}</p>
        </div>;
    }

    return (
        <Fetch
            uri={url2}
            something={something}
            getThetoken={token}
            renderSuccess={StandardSuccessOutlet}
            setrequesttype={setrequesttype}
            triggerapi={triggerapi}
            body={JSONbody}
        />
    );
}

function StandardSuccessOutlet({ data }: StandardAPIProps) {
    console.log("inside StandardSuccessOutlet");
    console.log(data);

    //TODO, we could have a better way to display this, based on the response
    //instead of a hard coded response.
    return (
        <div className="StandardDisplayBox">
            {/* <p>{data.dateTimeOfResponse}</p>
      <p>{data.detailsAboutOperation}</p> */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

const UpdateExistingQuote = () => {
    var [token, settoken] = useState("");
    //get token
    const { getAccessTokenSilently } = useAuth0();
    var [authorname, setauthorname] = useState("");
    const authornamePlaceHolder = "enter a name. for example : Michael Scott";
    const [authorrelatederrors, setauthorrelatederrors] = useState("enter a name. for example : Michael Scott");
    var [quotestring, setquotestring] = useState("");
    const quotestringPlaceHolder = "enter a quote. for example : That's what she said.";
    const [quotestringrelatederrors, setquotestringrelatederrors] = useState("enter a quote. for example : That's what she said.");
    var [quoteIdentifierString, setquoteIdentifierString] = useState("");
    const quoteIdentifierStringPlaceHolder = "identifier string comes here.";
    const [quoteIdentifierStringrelatederrors, setquoteIdentifierStringrelatederrors] = useState("identifier string comes here.");    

    //trigger for the api.
    const [triggerapi, settriggerapi] = useState("hello");
    const [readytoroll, setreadytoroll] = useState(false);


    const callAPI = () => {

        // eslint-disable-next-line no-useless-concat
        var insidemessage = "Entered " + "callAPI";
        console.log(insidemessage);

        if (triggerapi === "bird") {
            console.log("inside with bird. changing to hello");
            settriggerapi("hello");
        } else {
            console.log("inside with hello. changing to bird");
            settriggerapi("bird");
        }

        setreadytoroll(true);

    }

    async function GrabThetoken() {
        console.log("AllTheQuotes - GrabThetoken");
        var getThetoken = await getAccessTokenSilently();
        settoken(getThetoken);
    }

    useEffect(() => {
        console.log("AllTheQuotes - useEffect");
        //update token here.
        GrabThetoken();
    });

    useEffect(() => {
        // console.log(`typing name "${numberofquotes}"`);
        console.log(`typing author "${authorname}"`);
        console.log(`typing quote "${quotestring}"`);
        console.log(`typing quoteIdentifierString "${quoteIdentifierString}"`);

        if (authorname.length === 0) {
            const localmessage = "you have not entered the author name yet.";
            console.log(localmessage);
            setauthorrelatederrors(localmessage);
            setreadytoroll(false);
        }
        else {
            const localmessage = "name is looking good. press button when ready.";
            console.log(localmessage);
            setauthorrelatederrors(localmessage);
        }

        if (quotestring.length === 0) {
            const localmessage = "you havent entered the quote yet.";
            console.log(localmessage);
            setquotestringrelatederrors(localmessage);
            setreadytoroll(false);
        }
        else {
            const localmessage = "quote is looking good. press button when ready.";
            console.log(localmessage);
            setquotestringrelatederrors(localmessage);
        }

        if (quoteIdentifierString.length === 0) {
            const localmessage = "you havent entered the quote identifier string yet.";
            console.log(localmessage);
            setquoteIdentifierStringrelatederrors(localmessage);
            setreadytoroll(false);
        }
        else {
            const localmessage = "quote identifier is looking good. press button when ready.";
            console.log(localmessage);
            setquoteIdentifierStringrelatederrors(localmessage);
        }        


    }, [quotestring, authorname, readytoroll,quoteIdentifierString]);

    return (
        <Fragment>
            <div>
                <p>Enter Author Name</p>
                <Input
                    value={authorname}
                    placeholder={authornamePlaceHolder}
                    onChange={(e) => setauthorname(e.target.value)}
                />
                <p >{authorrelatederrors}</p>
            </div>
            <div>
                <p>Enter Quote</p>
                <Input
                    value={quotestring}
                    placeholder={quotestringPlaceHolder}
                    onChange={(e) => setquotestring(e.target.value)}
                />
                <p >{quotestringrelatederrors}</p>
            </div>
            <div>
                <p>Enter Quote Identifier</p>
                <Input
                    value={quoteIdentifierString}
                    placeholder={quoteIdentifierStringPlaceHolder}
                    onChange={(e) => setquoteIdentifierString(e.target.value)}
                />
                <p >{quoteIdentifierStringrelatederrors}</p>
            </div>            
            <div>
                <DisplayHelper
                    token={token}
                    triggerapi={triggerapi}
                    readytoroll={readytoroll}
                    authorname={authorname}
                    quotestring={quotestring}
                    quoteIdentifierString = {quoteIdentifierString}
                />
            </div>
            <div>
                <br />
                <Button onClick={callAPI} color="primary">Itz alive!!!</Button>
            </div>
            {/* <hr /> */}
        </Fragment>
    );
};

export default UpdateExistingQuote;