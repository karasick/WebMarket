import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar";
import "bootstrap-icons/font/bootstrap-icons.css";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {ACCESS_TOKEN_LOCAL_KEY} from "./utils/consts";

function App() {
    const {appContext, userContext} = useContext(Context)

    useEffect(() => {
        if(localStorage.getItem(ACCESS_TOKEN_LOCAL_KEY)) {
            appContext.setIsLoading(true)

            userContext.checkAuth()
                .then(() => appContext.setIsLoading(false))
                .catch((e) => alert(e))
        }
    }, [])

  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
