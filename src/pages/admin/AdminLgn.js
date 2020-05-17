import React, {Component} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';



export class AdminLgn extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  login() {
    if(this.state.username && this.state.password){
      PostData('login',this.state).then((result) => {
        let responseJson = result;
        if(responseJson.userData){
          sessionStorage.setItem('userData',JSON.stringify(responseJson));
          this.setState({redirectToReferrer: true});
        }
        else
        alert(result.error);
      });
    }
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/Adminhome'}/>)
    }
    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/Adminhome'}/>)
    }
    return (

	<div>

  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
  <div class="container">
    <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/home">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/Studentlgn">Student Login</a>
        </li>
        <li class="nav-item px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/Facultylgn">Faculty Login</a>
        </li>
        <li class="nav-item active px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/AdminLgn">Admin Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container p-3 my-3 text-white col-md-6 ">


      <h1>Admin Login</h1>
      <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="text" class="form-control" name="username" onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" name="password" onChange={this.onChange} placeholder="Password" />
      </div>
      <div class="form-group form-check">

      </div>


      <button type="submit" class="btn btn-primary" value="Login" onClick={this.login}>Submit</button>


  </div>



	</div>


);
}
}
export default AdminLgn;
