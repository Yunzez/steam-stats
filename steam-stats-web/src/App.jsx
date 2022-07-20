
import Login from "./components/Login.jsx";
import Home from './components/Home.jsx'
import Help from "./components/Help.jsx";
import { Routes, Route } from 'solid-app-router'

function App() {
  return (
    <div class='container-fluid'>
      <h1 class='display-5'>Steam Stats</h1>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/help' element={<Help />}></Route>
      </Routes>
    </div>
  );
}

export default App;
