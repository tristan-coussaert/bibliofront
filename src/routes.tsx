import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Callback from './Callback';
import App from './App';
import Auth from './Auth/Auth';
import NotFound from './NotFound';
const auth = new Auth();

const handleAuthentication = (prop: any) => {
  if (/access_token|id_token|error/.test(prop.location.hash)) {
      auth.handleAuthentication();
  }
};
const makeMainRoutes = () => (
  <Switch>

    <Route path="/" exact={true} render={props => !auth.isAuthenticated() ?
      <Redirect to="/home" />
     :<App auth={auth} {...props} />} />
    <Route
      path="/callback"
      render={props => {
        handleAuthentication(props);
        return <Callback {...props} />;
      }}
    />

    <Route exact={true} path="/home" render={props => <App auth={auth} {...props} />} />
    <Route exact={true} path="/profile" render={props =>
      !auth.isAuthenticated() ?
        <Redirect to="/home" />
       :<App auth={auth} {...props} />} />
    <Route exact={true} path="/livre" render={props =>
      !auth.isAuthenticated() ?
        <Redirect to="/home" />
       :<App auth={auth} {...props} />} />       
           <Route exact={true} path="/user" render={props =>
      !auth.isAuthenticated() ?
        <Redirect to="/home" />
       :<App auth={auth} {...props} />} />   
    <Route render={props => <NotFound/>}/>
    
 </Switch>
);

export default makeMainRoutes;
