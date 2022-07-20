// import { Component } from 'solid-js';
import { NavLink } from 'solid-app-router'
const Login = () => {
  return (
    <div class='container'>
      <h2>Please Login Here</h2>
      <div class="mt-5">
        <label class="text-muted">Your Steam API Key</label>
        <input class="form-control mb-5" type='text' placeholder="API Key goes here"></input>
        <label class="text-muted">Your Steam User ID </label>
        <input class="form-control" type='text' placeholder="User ID goes here"></input>
      </div>
      <div class='mt-3'>
        <NavLink class='btn btn-primary me-3' activeClass='btn-light' href='/home' end>Login</NavLink>
        <NavLink class='btn btn-secondary' activeClass='btn-light' href='/help' end>How do I get these info?</NavLink>
      </div>
    </div>
  )
}

export default Login;