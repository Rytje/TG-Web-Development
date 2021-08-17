import Footer from './Components/Layout/Footer';
import TopBar from './Components/Layout/TopBar';
import Navigation from './Components/Layout/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <div className="container-fluid">
      <Router>
        <TopBar />
        <Navigation />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
