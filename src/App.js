import React from "react";
import { Helmet } from "react-helmet";
// Screens
import LandingPage from "./screens/Landing.jsx";
import { BrowserRouter , Switch,Route} from 'react-router-dom';
import Bridge from "./components/Sections/Bridge.jsx";
import Allapps from "./components/Pages/Allapps.jsx"
import TopNavbar from "./components/Nav/TopNavbar";
export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <TopNavbar />
      <BrowserRouter>
        <Switch>
          {/* <Route exact path='/' component={Landing} />
          <Route path="/bridge" component={Bridge} /> */}

          <Route path="/bridge" component={Bridge} />
          <Route path="/allapps" component={Allapps} />
          
          <Route exact  path="/" render={(props) => (
                <LandingPage />
              )}
            />

        </Switch>
      </BrowserRouter>
    </>
  );
}

