//this returns a view with links related to User Role

//TODO, see if we can hide quotehq if the login user is not supposed to see it
//as of 0.3.0, only moderators and above can see quotehq and all the quotes.

//3 layer network abstractin implemented as per the file APIServerDetails.tsx

import React, { Fragment, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Fetch from "../NetworkComponents/Fetch";
import { FixedSizeList } from "react-window";

const apiConfig = require("../../api_config.json");

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

// @ts-ignore
function DisplayHelper({ token }) {
    console.log("inside DisplayHelper");
    //TODO - these things should be coming from a config file
    // const baseURL = "https://localhost:44372";
    const baseURL = apiConfig.baseURL;
    const endPoint = "/api/Moderator/GetAllQuotes";
    const url2 = baseURL + endPoint;
    const something = "authorized";

    if (token === undefined) {
        console.log("DisplayHelper + token is undefined");
        return <div>token not available</div>;
    }

    return (
        <Fetch
            uri={url2}
            something={something}
            getThetoken={token}
            renderSuccess={StandardSuccessOutlet}
        />
    );
}

function StandardSuccessOutlet({ data }: StandardAPIProps) {
    console.log("inside StandardSuccessOutlet");
    console.log(data);

    const bigList = data.quoteCubes;

    // @ts-ignore
    const renderRow = ({ index, style }) => (
        <div style={{ ...style, ...{ display: "flex" } }}>
            <p className="lead text-muted">
                {bigList[index].quoteIdentifierCompadre}. Author : {bigList[index].quoteAuthor}
            </p>
            <p className="lead text-muted">
                Quote : {"" + bigList[index].quoteContent}
            </p>
        </div>
    );

    //TODO - the list is not mobile responsive.
    const itemSizeOfListRow = 50;
    const heightOfEntireList = 300;
    const widthOfEntireList = 600;

    //TODO, we could have a better way to display this, based on the response
    //instead of a hard coded response.
    return (
        <div className="StandardDisplayBox">
            <p>please note : the list is not mobile responsive yet. TODO</p>
            {/* <p>{data.dateTimeOfResponse}</p>
      <p>{data.detailsAboutOperation}</p> */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <hr></hr>
            <FixedSizeList
                height={heightOfEntireList}
                width={widthOfEntireList}
                itemCount={bigList.length}
                itemSize={itemSizeOfListRow}
            >
                {renderRow}
            </FixedSizeList>
        </div>
    );
}

const AllTheQuotes = () => {
    var [token, settoken] = useState("");
    //get token
    const { getAccessTokenSilently } = useAuth0();

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

    return (
        <Fragment>
            <div>
                <DisplayHelper token={token} />
            </div>
            {/* <hr /> */}
        </Fragment>
    );
};

export default AllTheQuotes;
