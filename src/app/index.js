import React from 'react'
import ReactDOM from 'react-dom'

import MarkdownComponent from './markdowncomponent'

import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Link
} from 'react-router-dom'

import './css/index.css';

class App extends React.Component {
  render(){
    return(
        <MarkdownComponent />
    )
  }
}

// Put
ReactDOM.render(<App />, document.getElementById('wrapper'));
