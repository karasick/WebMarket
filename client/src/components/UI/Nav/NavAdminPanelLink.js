import React from 'react';
import {ADMIN_PANEL_ROUTE} from "../../../utils/paths";
import {Link} from "react-router-dom";

const NavAdminPanelLink = () => {
    return (
        <Link className={"nav-link"} to={ADMIN_PANEL_ROUTE}>Admin Panel</Link>
    );
};

export default NavAdminPanelLink;