import Footer from './components/Footer'
import Preferences from './components/Preferences'
import Home from './components/Home'
import Header from './components/Header'
import NavBar from './components/NavBar'
import {Switch, BrowserRouter, Router, Route, NavLink, Link} from 'react-router-dom'

function App() {
  let location = 'home'
  return (
    <div>
      App
    <BrowserRouter>

      <Header location={location}/>
      <NavBar />

      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/preferences">
          <Preferences />
        </Route>

      </Switch>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
