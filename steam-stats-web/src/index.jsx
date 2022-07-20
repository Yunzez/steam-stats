/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Router} from 'solid-app-router'
render(() => <Router><App /></Router>, document.getElementById('root'));