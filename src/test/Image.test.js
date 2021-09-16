import React from 'react';
import ReactDOM from 'react-dom';
import Image from './components/Image'
import "./index.css"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <Image image={require("./images/image.jpg").default} />
    <Image image={require("./images/arduino.jpg").default} />
    <Image image={require("./images/design2.jpg").default} />
    <Image image={require("./images/algo.jpg").default} />
    <Image image={require("./images/iot2.jpg").default} />
    <Image image={require("./images/iot3.jpg").default} />
    <Image image={require("./images/mobile.jpg").default} />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
