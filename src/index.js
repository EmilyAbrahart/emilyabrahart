import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './styles/index.css';
import Layout from './components/layout';



ReactDOM.render(<Router><Layout /></Router>, document.getElementById('root'));


