import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Products from './components/Products';
import Contact from './components/Contact';
import SignUp from './components/SignUp';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const checkHome = (Component, props = '') => () => {
  if (Component === Home) {
    // return (localStorage.getItem('_id')) ? (<Redirect to="/customers" />) : (<Component />);
    // if(localStorage.getItem('_id')) {
    //   return <Redirect to={{ 'pathname': '/customers', 'state': '' }} />
    // } else {
    return <Component />;
    // }
  } else {
    return <Component />;
  }

};

function App() {
  return (
    <div className="App">
      <p>DigiChip</p>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={checkHome(Home)} />
          <Route exact path="/about" render={checkHome(About)} />
          {/* <Route exact path="/services" render={checkHome(Services)} /> */}
          <Route exact path="/contact" render={checkHome(Contact)} />
          <Route exact path="/signUp" render={checkHome(SignUp)} />
          {/* <Route exact path="/products" render={checkHome(Products)} /> */}
          <Route path="*" render={() => <p style={{ "textAlign": "center", "marginTop": "25px" }}>Page Not Found</p>} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
