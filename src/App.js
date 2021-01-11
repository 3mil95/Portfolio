
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Divider from './Components/Divider';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Contact from './Components/Contact/Contact';
import ProjectGrid from './Components/Projects/ProjectGrid';
import Competence from './Components/Competence/Competence';
import About from './Components/About/About';

const refs = {}
class App extends Component {
  state = {  }

  setRef = (item, title) => {
    refs[title] = item;
  }  

  handleScroll = (title) => {
    const ref = refs[title];
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
  }

  render() { 
    return ( 
      <div className="App">
        <Header handleClick={this.handleScroll}/>
        <ScrollToTop/>
        <Divider setRef={this.setRef} title="About" bgColor="#ddd" color="#050A30">
          <About/>
        </Divider>

        <Divider setRef={this.setRef} title="Education" bgColor="#050A30" color="#fff">
          <Competence/>
        </Divider>

        <Divider  setRef={this.setRef} fullScreen title="Project" bgColor="#ddd" color="#050A30">
          <ProjectGrid/>
        </Divider>

        <Contact setRef={this.setRef} title="Contact me">
        
        </Contact>
      </div>
     );
  }
}
 
export default App; 

