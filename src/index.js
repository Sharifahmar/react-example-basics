import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LazyLoadingRouter from './LazyLoadingRouter';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ChildParentDataShareComponent from './ChildParentDataShareComponent';
import RefsExample from './RefsExample';
import ReactLifeCycle from './ReactLifeCycle';
import ReactLifeCycleHooks from './ReactLifeCycleHooks';
import RefsExampleHook from './RefsExampleHook';
import { LazyLoadingRouterAfComponent } from './LazyLoadingRouterAfComponent';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ChildParentDataShareComponent/> */}
    {/* <BrowserRouter>
    <LazyLoadingRouter/>
    </BrowserRouter> */}
    {/* <RefsExample/> */}
    {/* <ReactLifeCycleHooks/> */}
    {/* <RefsExampleHook/> */}
     <BrowserRouter>
    <LazyLoadingRouterAfComponent/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
