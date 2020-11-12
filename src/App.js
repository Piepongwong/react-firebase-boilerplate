import "./App.css";
import { Switch, Route } from "react-router-dom";
import Authentication from "pages/Authentication";
import Home from "pages/Home";
function App() {
  return (
    <Switch>
      <Route path="/authentication" component={Authentication} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
