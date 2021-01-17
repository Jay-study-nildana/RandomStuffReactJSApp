//file based on ExternalApi.js

import React, { useState } from "react";
import { Alert } from "reactstrap";
import MyQuotesWelcome from "../components/MyQuotesWelcome";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import config from "../auth_config.json";
import Loading from "../components/Loading";

//TODO - this must come from a config file.
// @ts-ignore
const { apiOrigin = "https://localhost:44372" } = config;

export const MyQuotes = () => {
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

    //TODO - investigate if we really need this
    //since, as of version 0.3.0, I have decided no longer to display claims to user
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

  // @ts-ignore
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

              onClick={(e) => handle(e, handleLoginAgain)}
            >
              log in again
            </a>
          </Alert>
        )}
        <MyQuotesWelcome />
      </div>
    </>
  );
};

export default withAuthenticationRequired(MyQuotes, {
  onRedirecting: () => <Loading />,
});
