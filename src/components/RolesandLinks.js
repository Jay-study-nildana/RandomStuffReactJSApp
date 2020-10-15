//this is the Roles and Links component
//here, I want to build a view component - which will in turn depend on other view components
//to show the different roles and corresponding links that are available to the user.

import React, { Fragment } from "react";
import UserRole from "./RolesandLinksComponents/UserRole";
import ModeratorRole from "./RolesandLinksComponents/ModeratorRole";
import AdminRole from "./RolesandLinksComponents/AdminRole";
import Claims from "./RolesandLinksComponents/Claims";


const RolesandLinks = () => (

    <Fragment>
        <UserRole />
        <ModeratorRole />
        <AdminRole />
        <Claims />
    </Fragment>    
);

export default RolesandLinks;