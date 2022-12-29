import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LogInForm from "./componets/login/LogInForm";
import ImageLists from "./componets/ListImages/ImageLists";
import UploadImage from "./componets/upload/UploadImage";
import Navbar from "./componets/nav/Nav";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogInForm} />
        <div>
          <Navbar />

          <Route exact path="/upload" component={UploadImage} />
          <Route exact path="/images" component={ImageLists} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
