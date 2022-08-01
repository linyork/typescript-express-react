import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import React = require('react');
// import ReactDOM = require('react-dom');
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
