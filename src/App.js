import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {Header,Footer} from './components';
import {Home,Details} from './pages';

const App = () =>{
  return (
    <Router>
      <Header />
      <div className="app">
         <Container fluid>
             <Switch>
                 <Route component={Home} path='/' exact/>
                 <Route component={Details} path='/videodetails' exact/>
             </Switch>
         </Container>
      </div> 
      <Footer /> 
    </Router>
  );
}

export default App;
