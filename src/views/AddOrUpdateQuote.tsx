import React, { Fragment } from "react";
import GenerateRandomQuotes from "../components/QuoteCrudComponents/GenerateRandomQuotes";
import GenerateUserAddedQuote from "../components/QuoteCrudComponents/GenerateUserAddedQuote";
import UpdateExistingQuote from "../components/QuoteCrudComponents/UpdateExistingQuote";

const AddOrUpdateQuote = () => (
    <Fragment>
        <div>
            <p>Add Or Update Quote Here.</p>
        </div>
        <hr></hr>
        <div>
            <p>Use This Option to generate random auto generated quotes</p>
            <GenerateRandomQuotes />
        </div>
        <hr></hr>
        <div>
            <p>Use This Option to generate random quote of your own making</p>
            <GenerateUserAddedQuote />
        </div>
        <hr></hr>
        <div>
            <p>Use This Option to Update Existing Quote</p>
            <UpdateExistingQuote />
        </div>
        <hr></hr>

    </Fragment>
);

export default AddOrUpdateQuote;