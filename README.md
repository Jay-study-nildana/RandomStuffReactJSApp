# Random Stuff React JS App

This is the companion React JS App for the Random Stuff API Server.

Find the documentation of the [app here](https://jay-study-nildana.github.io/RandomStuffDocs/ReactJSApp/)

Find the documentation, student notes and deployments for the [entire project here](https://jay-study-nildana.github.io/RandomStuffDocs/)

Thank you.

# Before Running The Project

1. Check file api_config.json, and update it with the Random Stuff API server localhost or deployment server. Otherwise, the app will no random stuff quotes api server to consume.
1. Check file auth_config.json, and update it to match the authentication details used in the api server with respect to Auth0 settings. Without this, the login wont work. The auth based things will not work. But, home page will work.
1. this template was borrowed from Auth0 folks. So, it has a dummy api server as well. The focus is only on the web app. so, please use 'npm run-script spa'

# TypeScript

The app has been upgraded to use TypeScript. This is good but there will always be times when typescript will say that a specific line or code or something is not correct. This can become problematic, especially for components that are only used by the app but not created by the developer. 

in such cases, stop typescript from doing its job using the following command.

    // @ts-ignore

this will force typescript to stop checking the following line. 

    // @ts-nocheck

this will force the entire file to be ignored by typescript. 

Both the above options, should be used as a solution only if the code is really beyond the control of the developer. not as a short cut.

# Note to student developers

These are files that contain some detailed notes and comments.

* RandomQuote.tsx - goes into full detail about the 3 layer abstraction network calls. It has a raw call to api, half way abstraction-half way raw call, and a full 3 layer abstraction call, all three types of code. This focuses on GET
* GenerateRandomQuotes.tsx - goes into detail about collecting input, input validation and making a POST call based on user input, with a URI parameter. That means, it does not have a POST body as such. 
* GenerateUserAddedQuote.tsx - continuation of GenerateRandomQuotes, but with a proper JSON body. 
* This must be run in conjunction with the API server. Details available in the main project documentation.
* NetworkComponents folder has the components that take care of network calls to the API server.

# Other Things

* keep console open - As always, dear student, please check console for plenty of console line outputs to help you understand flow of logic and code.
* when investigating network calls, ensure that, "Start Time" is one of the columns, and is sorted in increasting time. Plenty of times, I got stuck becuase, I thought I was not making any network calls even though all evidence suggestd otherwise. It's funny but frustrating until you realize this was happening.

# Hire Me

I work as a full time freelance software developer and coding tutor. Hire me at [UpWork](https://www.upwork.com/fl/vijayasimhabr) or [Fiverr](https://www.fiverr.com/jay_codeguy). 

# important note 

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

I can be reached through my website - [Jay's Developer Profile](https://jay-study-nildana.github.io/developerprofile)