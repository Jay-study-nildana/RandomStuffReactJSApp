import React, { Fragment } from "react";
import Fetch from "../NetworkComponents/Fetch";
import { FixedSizeList } from "react-window";

const apiConfig = require("../../api_config.json");

export interface StandardAPIData {
  listOfResponses: string[];
  dateTimeOfResponse: Date;
  operationSuccessful: boolean;
  detailsAboutOperation: string;
}

interface StandardAPIProps {
  data: StandardAPIData;
}

function DisplayHelper() {
  //TODO - these things should be coming from a config file
  // const baseURL = "https://localhost:44372";
  const baseURL = apiConfig.baseURL;
  const endPoint = "/api/ProjectDetails/Hi";
  var url2 = baseURL + endPoint;

  console.log("inside DisplayAPIServerDetailsHelper");

  return (
    <Fetch uri={url2} renderSuccess={StandardSuccessOutlet} />
  );
}



function StandardSuccessOutlet({ data }: StandardAPIProps) {

  const bigList = data.listOfResponses;

  // @ts-ignore
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <p className="lead text-muted">
        * {bigList[index]}
      </p>
    </div>
  );

  //TODO - the list is not mobile responsive.
  const itemSizeOfListRow = 50;
  const heightOfEntireList = itemSizeOfListRow * bigList.length + itemSizeOfListRow;
  const widthOfEntireList = window.innerWidth;

  //I am using FixedSizeList
  //which is meant for very big large volume lists and hence is overkill
  //still using it.
  return (
    <div className="StandardDisplayBox">
      <p>{data.dateTimeOfResponse}</p>
      <p>{data.detailsAboutOperation}</p>
      <hr></hr>
      <h4>Server Information</h4>
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

const APIServerDetails = () => {
  console.log("inside APIServerDetails");

  return (
    <Fragment>
      <div>
        <DisplayHelper />
      </div>
      {/* <hr /> */}
    </Fragment>
  );
};

export default APIServerDetails;
