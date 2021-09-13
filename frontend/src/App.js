import './App.css';
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import Error from './component/Error';
import Navbar from './component/Navbar';
import Event from './component/Event'
import { Route, Switch } from 'react-router-dom'
import Test from './component/Test';


function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/event">
          <Event/>
        </Route>
        <Route path="/test">
          <Test/>
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
