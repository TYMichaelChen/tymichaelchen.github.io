import React from 'react';
import Experience from './experience/experience.jsx';
import Home from './home/home.jsx';
import Nav from './nav/nav.jsx';
import Project from './project/project.jsx';
import Footer from './footer/footer.jsx';


import '../static/css/main.scss';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Project />
        <Experience />
        <Footer />
      </div>
    );
  }
};

export default App;
