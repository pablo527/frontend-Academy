import React, {Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

//Components
import Header from './componets/Header';
import Footer from './componets/Footer';
import Home from './componets/Home';
import Nosotros from './componets/Nosotros';
import Signin from './componets/Signin';
import Signup from './componets/Signup';
import Courses from './componets/Courses'

function App() {
  return (
    <Fragment>
      <Header/>
      <Router>
      <Switch>
          <Route  exact path="/"  component = {() => <Home />} />
          <Route  exact path="/nosotros" component={()=> <Nosotros/> } />
          <Route  exact path="/signin" component={()=> <Signin/> } />
          <Route  exact path="/cursos" component={()=> <Courses/> } />
          <Route  exact path="/signup" component={()=> <Signup/> } />

      </Switch>

    </Router> 
    <Footer/>  
    </Fragment>
    
  );
}

export default App;
