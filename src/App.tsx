import React, { useState } from "react";

import Playground, { Page } from "./playground";
import Preview from "./preview";

import "./App.css";

function getPageIdFromURL() {
  const hash = window.location.hash;
  let pageId = hash.substring(1);
  return pageId as Page;
}

function getParams() {
  let queryString = window.location.search;
  if (queryString.charAt(0) === "/") {
    queryString = queryString.substring(1);
  }
  if (queryString.charAt(queryString.length - 1) === "/") {
    queryString = queryString.substring(0, queryString.length - 1);
  }

  const params = queryString.split("&");
  const paramMap = {};
  params.forEach((kv) => {
    const [key, val] = kv.split("=");
    // @ts-ignore
    paramMap[key] = val;
  });

  return paramMap;
}

function App() {
  const [pageId, setPageId] = useState(getPageIdFromURL() || "search");

  return (
    <div className="App">
      <header className="App-header">
        ThoughtSpot Everywhere Test Bed
        <nav>
          <label htmlFor="id-show-menu" className="show-menu">
            <div className="nav-icon">☰</div>
          </label>
          <input
            type="checkbox"
            id="id-show-menu"
            className="checkbox-menu"
            role="button"
          />
          <div className="menu-block">
            <ul className="navUL">
              <li>
                <a href="#" onClick={() => setPageId(Page.Search)}>
                  Search
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setPageId(Page.Viz)}>
                  Viz
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setPageId(Page.App)}>
                  App
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container">
        <Playground pageId={pageId} params={getParams()} />
        <Preview />
      </div>
    </div>
  );
}

export default App;
