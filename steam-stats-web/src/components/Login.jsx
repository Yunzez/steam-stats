// import { Component } from 'solid-js';
import { NavLink } from 'solid-app-router'
import { createEffect, createSignal } from 'solid-js';

import { userID, setUserID, login, setLogin, user, setUser } from '../App';

const Login = () => {
  function updateUid() {
    setUserID(document.getElementById('useridInput').value)
  }

  function checkIDandLogin() {
    let cleanUid = userID().trim()
    createEffect(async () => {
      document.getElementById('loading').classList.remove('d-none')
      const res = await fetch(`https://note-the-project-n.herokuapp.com/steam/getinfo?type=summary&uid=${cleanUid}`)
      const data = await res.json()
      const players = data.info.response.players
      console.log(players)
      if (players){
        setUser(players)
        console.log('just set user ')
        if (!login()){
          document.getElementById('loading').classList.add('d-none')
          setLogin(true)
        }
      }
    })  

  }

  return (
    <div class='container'>
      <h2>Please Login Here</h2>
      <div class="mt-5">
        <label class="text-muted">Your Steam API Key</label>
        <input class="form-control mb-5" type='text' placeholder="API Key goes here"></input>
        <label class="text-muted">Your Steam User ID </label>
        <input id='useridInput' onInput={() => updateUid(this)} class="form-control" type='text' placeholder="User ID goes here"></input>
      </div>
      <div class='mt-3'>
        <button class='btn btn-primary me-3' onClick={() => { checkIDandLogin() }} id='login-btn' activeClass='btn-light' href='/home' end>Login</button>
        <NavLink class='btn btn-secondary' activeClass='btn-light' href='/help' end>How do I get these info?</NavLink>
      </div>
      <div id="loading" class='d-none mt-5 w-100'>
        <h4>Loading......</h4>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-light" role="status">
          <span class="sr-only"></span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
  )
}
export {user, setUser}
export default Login;