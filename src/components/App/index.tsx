import React, { useState } from 'react';
import Playground, { Page } from '../Playground';
import Preview from '../Preview';
import Header from '../Header';
import './App.css';

const getPageIdFromURL = () => {
    const hash = window.location.hash;
    let pageId = hash.substring(1);
    return pageId as Page;
};

const getParams = () => {
    let queryString = window.location.search;
    if (queryString.charAt(0) === '/') {
        queryString = queryString.substring(1);
    }
    if (queryString.charAt(queryString.length - 1) === '/') {
        queryString = queryString.substring(0, queryString.length - 1);
    }

    const params = queryString.split('&');
    const paramMap = {};
    params.forEach((kv) => {
        const [key, val] = kv.split('=');
        // @ts-ignore
        paramMap[key] = val;
    });

    return paramMap;
};

const App = () => {
    const [pageId, setPageId] = useState(
        getPageIdFromURL() || 'fullapp-active-tab-answers',
    );

    return (
        <div className="App">
            <Header setPageId={setPageId} pageId={pageId} />
            <div className="container">
                <Playground pageId={pageId} params={getParams()} />
                <Preview />
            </div>
        </div>
    );
};

export default App;
