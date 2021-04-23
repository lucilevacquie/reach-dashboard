import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import tw from "tailwind-styled-components";
import {useLoginContext} from "./loginProvider";
import Register from "./pages/register"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import Navbar from "./components/navbar"

const Container = tw.div``;

function App() {

  const {login} = useLoginContext()

  useEffect(() => {
    console.log("app.js");
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        login(user);
      }
    } catch (e) {
      // do nothing
    }
  }, [login]);
  

  return (
    <Container>
      <Router>
        <div>
          <Navbar/>

          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
