import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './components/NavBar';
import News from './components/News';
import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import React, { Component } from 'react'

const App=()=> {

  const [apiKey, setsetApiKey] = useState(process.env.REACT_APP_NEWS_API);

  const [progress, setProgress] = useState(0);

  const pageSize = 18;
    return (
      <div >
        <BrowserRouter>
          <Navbar />
            <LoadingBar
              color='#f11946'
              progress={progress}
              height={3}
            />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgres={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News apiKey={apiKey} setProgres={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgres={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={apiKey} setProgres={setProgress} key={"general"} pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News apiKey={apiKey} setProgres={setProgress} key={"health"} pageSize={pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News apiKey={apiKey} setProgres={setProgress} key={"science"} pageSize={pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgres={setProgress} key={"sports"} pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgres={setProgress} key={"technology"} pageSize={pageSize} country="us" category="technology" />} />

          </Routes>
        </BrowserRouter>
        {/* <Navbar title="Our News" home="Home" />
      <News/> */}

      </div>
    );

  }


export default App