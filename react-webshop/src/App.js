import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './Components/Store/Homepage';
import StorePage from './Components/Store/StorePage';
import UserPage from './Components/User/UserPage';
import { AuthProvider } from './Contexts/AuthContext';

function App() {

  return (
    <div className="container-fluid">
      <AuthProvider>
        <Router>
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path="/fightsticks" component={FightSticksPage} /> */}
            <Route path="/account"><UserPage /></Route>
            <Route path="/store"><StorePage /></Route>
            {/* <Route path="/fightsticks"><FightSticksPage /></Route> */}
            {/* <Route path="/pads" component={PadsPage} /> */}
            <Route path="/" component={Homepage} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
