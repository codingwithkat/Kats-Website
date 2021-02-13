import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Inspiration } from "./components/Inspiration";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Projects" component={Projects} />
              <Route path="/Inspiration" component={Inspiration} />
              <Route path="/Certificates" component={Certificates} />
              <Route path="/Contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;


























// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
