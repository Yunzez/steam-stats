
import Login from "./components/Login.jsx";
import Home from './components/Home.jsx'
import Help from "./components/Help.jsx";
import { Routes, Route } from 'solid-app-router'
import { createSignal, Switch } from "solid-js";

const [userID, setUserID] = createSignal('')
const [login, setLogin] = createSignal(false)
const [user, setUser] = createSignal(undefined)
function App() {
  return (
    <div class='container-fluid'>
      <h1 class='display-5'>Steam Stats</h1>
      <Switch>
          <Match when={!login()} >
              <Login/>
          </Match>
          <Match when={login()} >
              <Home/>
          </Match>
        </Switch>
      <Routes>
        <Route path='/help' element={<Help />}></Route>
      </Routes>
    </div>
  );
}

export { userID, setUserID, login, setLogin, user, setUser }
export default App;
