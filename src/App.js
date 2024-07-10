import './App.css';
// import React, { Component } from 'react'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Submit from './components/Submit';

// export default class App extends Component {
const App = () => {
  // apiKey = process.env.REACT_APP_NEWS_API
  const apiKey = process.env.REACT_APP_NEWS_API

  // pageSize = 15;
  const pageSize = 15;

  // state = {
  //   progress: 0
  // }
  // setProgress = (progress) => {
  //   this.setState({ progress: progress })
  // }
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light');//whether dark mode is on or not

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#000000'
    }
  }

  // render() {//render() - renders HTML on the screen
  return (
    <div>
      <Router>
        {/* <Navbar pageSize={this.pageSize} /> */}
        <Navbar pageSize={pageSize} mode={mode} toggleMode={toggleMode} />
        <LoadingBar
          color='#f11946'
          height={3}
          // progress={this.state.progress}
          progress={progress}
        />
        <Routes>
          {/* 
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />} /> 
          */}
          <Route exact path="/" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} mode={mode} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/submit" element={<Submit setProgress={setProgress} mode={mode} apiKey={apiKey} pageSize={pageSize} />} />
        </Routes>
      </Router>
    </div>
  )
  // }//render end
}

export default App;

