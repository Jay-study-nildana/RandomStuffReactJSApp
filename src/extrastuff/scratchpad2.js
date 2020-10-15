useEffect(() => {

    setpostbody(JSON.stringify( {quoteTitle,quoteContent,secretPhrase}));

  }, [quoteTitle,quoteContent,secretPhrase]);



  async function ApiCallStuff() {
    setLoading(true);
    setAPIstatusresponse("waiting....");
    //get token
    var getThetoken = await getAccessTokenSilently();
    fetch(inputbox1, {
      method: "POST",
      body : postbody,
      headers: {
        Authorization: `Bearer ${getThetoken}`,
        "Content-Type": `application/json`,
      },
    }
    )