import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


fetch('resume.json')
  .then(response => response.json())
  .then(data => console.log('data is', data))
  .catch(error => console.log('error is', error));

fetch('/resume.json')
  .then(response => response.json())
  .then(data => console.log('data is', data))
  .catch(error => console.log('error is', error));
//解析json加载到属性
fetch('/resume.json')
  .then(response => response.json())
  .then(function(json) {
ReactDOM.render(<App value={json}/>, document.getElementById('root'));
  })
  .catch(error => console.log('error is', error));

fetch('/my-resume/resume.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log(json);
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
