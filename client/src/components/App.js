import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageONe<Link to="/pagetwo">pagetwo</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      PageTwo<Link to="/">pageone</Link>
    </div>
  );
};
const PageThree = () => {
  return <div>PageThree</div>;
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
          <Route path="/pageThree" component={PageThree} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
