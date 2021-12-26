import React, {useContext} from 'react';
import {HOME_ROUTE, LOGIN_ROUTE} from "../../../utils/paths";
import {useNavigate} from "react-router-dom";
import NavButton from "./NavButton";
import {Context} from "../../../index";

const NavAuthButton = ({isAuth, onClick}) => {
    const navigate = useNavigate()

    const {userContext} = useContext(Context)

    const login = () => {
        onClick()
        navigate(LOGIN_ROUTE)
    }

    const logout = () => {
        userContext.logout()
            .then(() => {
                onClick()
                navigate(HOME_ROUTE)
            })
            .catch((e) => alert(e))
    }

    return (isAuth ?
        <NavButton title={"Logout"} clickHandler={logout}/> :
        <NavButton title={"Login"} clickHandler={login}/>
    );
};

export default NavAuthButton;