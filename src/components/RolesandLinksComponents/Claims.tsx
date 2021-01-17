// //this returns a view with links related to User Role

// import React, { Fragment, useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Collapse, Button, CardBody, Card } from 'reactstrap';

// const Claims = () => {
//   //these are api related.
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   console.log(error);
//   const [loading, setLoading] = useState(false);
//   console.log(loading);
//   // const [counter, setcounter] = useState(1);
//   const baseURL = "https://localhost:44372";
//   const endPoint = "/api/TheOthers/claims";
//   const url2 = baseURL + endPoint;
//   // const [apimessage1, setapimessage1] = useState("api status will come here");
//   const { getAccessTokenSilently } = useAuth0();

//   //  these are related to react strap
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

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
//           <p>You dont have any claims</p>
//         </div>
//       );
//     return (
//       <div>
//         {/* <p>{data.listOfResponses[0]}</p> */}
//         {/* <p>{ JSON.stringify(data,null,2)}</p> */}
//         <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>see your claims</Button>
//         <Collapse isOpen={isOpen}>
//           <Card>
//             <CardBody>
//               <p>{JSON.stringify(data, null, 2)}</p>
//             </CardBody>
//           </Card>
//         </Collapse>
//       </div>
//     );
//   }

//   // useEffect(() => {
//   //   ApiCallStuff();
    
//   // }, []);

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

// export default Claims;

export {}
