
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Restrurent from './components/Restrurent/Restrurent';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Restrurent></Restrurent>

          </Route>
          <Route exact path="/home">
            <Restrurent></Restrurent>

          </Route>
          <Route exact path="/about">
            <About></About>

          </Route>
          <Route exact path="/contact">
            <Contact></Contact>

          </Route>
          <Route path="/home/:mealId">
            <MealDetails></MealDetails>

          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
