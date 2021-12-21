import React, {useContext} from 'react';
import {Navigate, useRoutes} from "react-router-dom";
import {
    ADMIN_PANEL_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    HOME_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE
} from "../utils/paths";
import AdminPanel from "../pages/AdminPanel";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";
import Market from "../pages/Market";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";
import {Context} from "../index";

const AppRouter = () => {
    const {userContext} = useContext(Context)

    const publicRoutes = [
        { path: LOGIN_ROUTE, element: <Auth/>},
        { path: REGISTRATION_ROUTE, element: <Auth/>},
        { path: HOME_ROUTE, element: <Market/> , children: []},
        { path: PRODUCT_ROUTE + "/:id", element: <Product/>},
    ]

    const authRoutes = [
        { path: ADMIN_PANEL_ROUTE, element: userContext.isAuth ? <AdminPanel/> : <Navigate to="/" />},
        { path: BASKET_ROUTE, element: userContext.isAuth ? <Basket/> : <Navigate to="/" />},
    ]

    const utilRoutes = [
        { path: '*', element: <NotFound/>},
    ]

    const routes = [...publicRoutes, ...authRoutes, ...utilRoutes]

    const element = useRoutes(routes);

    return element;
};

export default AppRouter;