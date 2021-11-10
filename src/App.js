import './App.css';
import Home from './Pages/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Allwatches from './Pages/Allwatches/Allwatches';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/watches">
            <Allwatches></Allwatches>
          </Route>
          <Route path="/purchase/:id">
            <Purchase></Purchase>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
