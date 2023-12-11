import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './Components/Footer';


const App = () => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  }

  let pageSize = 9;
  const apikey = process.env.REACT_APP_NEWS_API
  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />

        <Routes>
          <Route exact path="/" element={<News setProgress={updateProgress} Apikey={apikey} key="home" pageSize={pageSize} category="general" />} />
          <Route exact path="/business" element={<News setProgress={updateProgress} Apikey={apikey} key="business" pageSize={pageSize} category="business" />} />
          <Route exact path="/technology" element={<News setProgress={updateProgress} Apikey={apikey} key="technology" pageSize={pageSize} category="technology" />} />
          <Route exact path="/science" element={<News setProgress={updateProgress} Apikey={apikey} key="science" pageSize={pageSize} category="science" />} />
          <Route exact path="/entertainment" element={<News setProgress={updateProgress} Apikey={apikey} key="entertainment" pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/sports" element={<News setProgress={updateProgress} Apikey={apikey} key="sports" pageSize={pageSize} category="sports" />} />
          <Route exact path="/general" element={<News setProgress={updateProgress} Apikey={apikey} key="general" pageSize={pageSize} category="general" />} />
          <Route exact path="/politics" element={<News setProgress={updateProgress} Apikey={apikey} key="politics" pageSize={pageSize} category="politics" />} />
          <Route exact path="/health" element={<News setProgress={updateProgress} Apikey={apikey} key="health" pageSize={pageSize} category="health" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App

