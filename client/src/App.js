import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar'
import { Mid } from './components/Mid'
import { Apartment } from './components/Apartment'
import { ApartmentDetails } from './components/ApartmentDetails'
import { Footer } from './components/Footer'
import FlatData from './components/FlatData'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Mid} />
          <Route exact path="/apartment/:page" component={Apartment} />
          <Route exact path="/flat/:id" component={ApartmentDetails} />
          <Route exact path="/flatdata/:id" component={FlatData} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
