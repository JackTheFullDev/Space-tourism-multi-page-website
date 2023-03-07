import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,Route,Link
} from "react-router-dom";
import { Navigation } from './pages/Navigation';
import { Destination } from './pages/Destination';
import { Crew } from './pages/Crew';

function App() {
  return (
    <div className="App">
      <Router>
       <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/destination" element={<Destination/> }/>
        <Route path="/crew" element={<Crew/> }/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
