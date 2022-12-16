
import  React from 'react';
import './App.css';
import {Brand,Cta,Navbar} from './components';
import {Footer,Blog,Possibility,Features,WhatGPT3,Header} from './containers'
function App() {
  return (
    <div className="APP">
      <div className='gradient__bg'>

          <Navbar />
          <Header />

      </div>
     <Brand />
     <WhatGPT3 />
     <Features />
     <Possibility />
     <Cta />
     <Blog />
     <Footer />
    </div>
  );
}

export default App;
