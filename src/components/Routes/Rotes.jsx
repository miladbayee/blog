import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import NotFound from "../../pages/404/NotFound";
import Post from "../../pages/Post";
import Auther from '../../pages/Auther'
const Rotes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/post/:id">
        <Post />
      </Route>
      <Route path="/auther/:auther">
        <Auther />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Rotes;
