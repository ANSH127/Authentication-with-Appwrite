
import './App.css';
import SingnUp from './components/SingnUp';
import {
	BrowserRouter as Router,
	Routes,
	Route
	// Link
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Forget from './components/Forget';
import Reset from './components/Reset';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/signup" element={<SingnUp/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/forget-password" element={<Forget/>}/>
        <Route exact path="/reset-password" element={<Reset/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
