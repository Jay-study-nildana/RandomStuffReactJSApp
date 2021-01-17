// //some scratching stuff 

// //this returns a view with links related to User Role

// import React, { Fragment, useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";


// const ModeratorRole = () => {
//   //these are api related.
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(false);
//   console.log(error);
//   console.log(loading);
//   // const [counter, setcounter] = useState(1);
//   const baseURL = "https://localhost:44372";
//   const endPoint = "/api/Moderator/Hi";
//   const url2 = baseURL + endPoint;
//   // const [apimessage1, setapimessage1] = useState("api status will come here");
//   const { getAccessTokenSilently } = useAuth0();

//   //does a quick API call
//   async function ApiCallStuff() {
//     //get token
//     var getThetoken = await getAccessTokenSilently();
//     setLoading(true);
//     fetch(url2, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${getThetoken}`,
//       },
//     })
//       .then((data) => data.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }

//   //a component to display the json contents.
//   // @ts-ignore
//   function DisplayJSONData({ data }) {
//     if (!data)
//       return (
//         <div>
//           <p>You dont have Moderator Role Privileges</p>
//         </div>
//       );
//     return (
//       <div>
//         {/* <p>{data.listOfResponses[0]}</p> */}
//         <p>{data.listOfResponses[1]}</p>
//         <p>Available links and facilities below</p>
//         {/* <p>the following does a full app reload</p>
//         <a href="/get-all-quotes">See all Quotes</a>
//         <p>the following does not</p> */}
//       </div>
//     );
//   }

//   useEffect(() => {
//     ApiCallStuff();
//   }, []);

//   return (
//     <Fragment>
//       <div>
//         {/* <h4>You have User Privileges</h4>
//         <p>You can use the following privileges</p> */}
//         <DisplayJSONData data={data} />
//       </div>
//       <hr />
//     </Fragment>
//   );
// };

// export default ModeratorRole;

//this returns a view with links related to User Role

//3 layer network abstractin implemented as per the file APIServerDetails.tsx

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
            <p>You do have Moderator Role</p>
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
