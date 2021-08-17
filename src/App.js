import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './screens/home';

function App() {
  const reload = () => window.location.reload();
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home} />
        {/* <Route path="/apple-app-site-association" exact onEnter={reload} /> */}
        {/* <Redirect path="/" to="/home" exact /> */}
      </Router>
    </div>
  );
}

export default App;
