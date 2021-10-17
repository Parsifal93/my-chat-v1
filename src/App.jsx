import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  return (
    <div>
   {/* <BrowserRouter>
      <Switch>
   <Route exact path="/chat">*/}
          <Chat />
        {/*</Route>
      </Switch>
        </BrowserRouter>*/}
   </div>
  );
}

export default App;
