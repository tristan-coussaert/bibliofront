import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Route, Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import User from './User';
import NotFound from './NotFound';
import Livre from './Livre';

class App extends React.Component <any> {

  login= () => {
    this.props.auth.login();
  }
   renewToken = () => {
     this.props.auth.renewToken();
   }
   logOut = () => {
      this.props.auth.logout();
   }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
     <div>
       <Navbar fluid>
         <Navbar.Header>
           <Navbar.Brand>

           </Navbar.Brand>
           <Link to={`/home`}>
           <Button
             bsStyle="primary"
             className="btn-margin"

           >
             Home
           </Button>
           </Link>
           {!isAuthenticated() &&
             <Button
               bsStyle="primary"
               className="btn-margin"
               onClick={this.login}
             >
               Log In
             </Button>}
           {isAuthenticated() &&
            <Link to={`/profile`}>
             <Button
               bsStyle="primary"
               className="btn-margin"

             >
               Profile
             </Button>
             </Link>
           }
          {isAuthenticated() &&
            <Link to={`/user`}>
              <Button
                bsStyle="primary"
                className="btn-margin"
              >
                User
              </Button>
             </Link>
             }
             {isAuthenticated() &&
            <Link to={`/livre`}>
              <Button
                bsStyle="primary"
                className="btn-margin"
              >
                Livre
              </Button>
             </Link>
             }
           {isAuthenticated() &&
             <Button
               bsStyle="primary"
               className="btn-margin"
                onClick={this.logOut}
             >
               Log Out
             </Button>}
         </Navbar.Header>
       </Navbar>
        <Route exact={true} path="/home" render={props => <Home auth={this.props.auth} {...this.props} />} />
        <Route exact={true} path="/profile" render={props => <Profile auth={this.props.auth} {...this.props} />} />
        <Route exact={true} path="/livre" render={props => <Livre auth={this.props.auth} {...this.props} />} />
        <Route exact={true} path="/user" render={props => <User auth={this.props.auth} {...this.props} />} />
        <Route path="/404" render={props => <NotFound/>}/>
     </div>
   );
  }
}

export default App;
