import React, { Fragment, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Fetch from "../NetworkComponents/Fetch";

export interface StandardAPIData {
    listOfResponses: string[];
    dateTimeOfResponse: Date;
    operationSuccessful: boolean;
    detailsAboutOperation: string;
}

interface StandardAPIProps {
    data: StandardAPIData;
}

// @ts-ignore
function DisplayHelper({ token }) {
    console.log("inside DisplayHelper");
    //TODO - these things should be coming from a config file
    const baseURL = "https://localhost:44372";
    const endPoint = "/api/Admin/Hi";
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

    //TODO, we could have a better way to display this, based on the response
    //instead of a hard coded response.
    return (
        <div className="StandardDisplayBox">
            <p>You do have Admin Role</p>
            {/* <p>{data.dateTimeOfResponse}</p>
      <p>{data.detailsAboutOperation}</p> */}
            <hr></hr>
        </div>
    );
}

const AdminRole = () => {
    var [token, settoken] = useState("");
    //get token
    const { getAccessTokenSilently } = useAuth0();

    async function GrabThetoken() {
        console.log("UserRole - GrabThetoken");
        var getThetoken = await getAccessTokenSilently();
        settoken(getThetoken);
    }

    useEffect(() => {
        console.log("UserRole - useEffect");
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

export default AdminRole;
