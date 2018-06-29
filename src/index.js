import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/PostsIndex";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {/* Could put an element here above the routes and it would always be available, reguardless of route */}
        <Route path="/" component={PostsIndex} />
        {/* <Route path="/posts/new" component={PostsNew} /> */}
        {/* <Route path="/posts/:id" component={Posts/:id} /> */}
        {/* <Route path="/app" component={App} /> */}
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
