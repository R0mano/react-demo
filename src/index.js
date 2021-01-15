import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request, ' <- This is the request config')
    // The 'request' object needs to be returned. If not the 'request is blocked
    // The 'request' may be edited before being returned
    return request;
}, error => {
    console.log(error, ' <- This is the error')
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    console.log(response, ' <- This is the response config')
    // The 'response' object needs to be returned. If not the 'response is blocked
    // The 'response' may be edited before being returned
    return response;
}, error => {
    console.log(error, ' <- This is the error')
    return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
