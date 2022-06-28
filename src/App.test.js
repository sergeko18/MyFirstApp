import MainApp from "./App";
import ReactDOM from 'react-dom';
import React from "react";

it ('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
})