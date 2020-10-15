//file based on ExternalApi.js

import React, { useState } from "react";
import {  Alert } from "reactstrap";
import MyQuotesWelcome from "../components/MyQuotesWelcome";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import config from "../auth_config.json";
import Loading from "../components/Loading";
import GetAllQuotesWelcome from "../components/GetAllQuotesComponents/GetAllQuotesWelcome";
import GetAllQuotesList from "../components/GetAllQuotesComponents/GetAllQuotesList";



const { apiOrigin = "https://randomstuffgeneratorsep23.azurewebsites.net" } = config;

export const GetAllQuotes = () => {
  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  const {
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
  } = useAuth0();

  const handleConsent = async () => {
    try {
      await getAccessTokenWithPopup();
      setState({
        ...state,
        error: null,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }

    await callApi();
  };

  const handleLoginAgain = async () => {
    try {
      await loginWithPopup();
      setState({
        ...state,
        error: null,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }

    await callApi();
  };

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      // const response = await fetch(`${apiOrigin}/api/external`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });

      const response = await fetch(`${apiOrigin}/api/TheOthers/claims`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });      

      const responseData = await response.json();

      setState({
        ...state,
        showResult: true,
        apiMessage: responseData,
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error,
      });
    }
  };

  const handle = (e, fn) => {
    e.preventDefault();
    fn();
  };

  return (
    <>
      <div className="mb-5">
        {state.error === "consent_required" && (
          <Alert color="warning">
            You need to{" "}
            <a
              href="#/"
              class="alert-link"
              onClick={(e) => handle(e, handleConsent)}
            >
              consent to get access to my quotes
            </a>
          </Alert>
        )}

        {state.error === "login_required" && (
          <Alert color="warning">
            You need to{" "}
            <a
              href="#/"
              class="alert-link"
              onClick={(e) => handle(e, handleLoginAgain)}
            >
              log in again
            </a>
          </Alert>
        )}
        <GetAllQuotesWelcome />
        <GetAllQuotesList />
      </div>
    </>
  );
};

export default withAuthenticationRequired(GetAllQuotes, {
  onRedirecting: () => <Loading />,
});
