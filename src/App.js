import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './screens/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home} />
        {/* <Redirect path="/" to="/home" exact /> */}
      </Router>
    </div>
  );
}

export default App;
