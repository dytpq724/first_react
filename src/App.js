import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App()  {
  return <Router>
    {/* <Switch>
      <Route path="/movie">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Detail />} />
    </Routes>
  </Router>
  // return 
}

export default App;
