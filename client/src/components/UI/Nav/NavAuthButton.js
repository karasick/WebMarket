import React, {useContext} from 'react';
import {HOME_ROUTE, LOGIN_ROUTE} from "../../../utils/paths";
import {useNavigate} from "react-router-dom";
import NavButton from "./NavButton";
import {Context} from "../../../index";

const NavAuthButton = ({isAuth}) => {
    const navigate = useNavigate()

    const {userContext} = useContext(Context)

    const logout = () => {
        userContext.logout()
            .then(() => navigate(HOME_ROUTE))
            .catch((e) => alert(e))
    }

    return (isAuth ?
        <NavButton title={"Logout"} clickHandler={logout}/> :
        <NavButton title={"Login"} clickHandler={() => navigate(LOGIN_ROUTE)}/>
    );
};

export default NavAuthButton;