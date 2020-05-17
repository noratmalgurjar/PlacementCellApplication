import React, {Component} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';



export class Studentlgn extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
    this.slogin = this.slogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  slogin() {
    if(this.state.username && this.state.password){
      PostData('slogin',this.state).then((result) => {
        let responseJson = result;
        if(responseJson.userData){
          sessionStorage.setItem('userData',JSON.stringify(responseJson));
          this.setState({redirectToReferrer: true});
          console.log(userData);
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
      return (<Redirect to={'/StudentHome'}/>)
    }
    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/StudentHome'}/>)
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
        <li class="nav-item active px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/Studentlgn">Student Login</a>
        </li>
        <li class="nav-item px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/Facultylgn">Faculty Login</a>
        </li>
        <li class="nav-item px-lg-4">
          <a class="nav-link text-uppercase text-expanded" href="/AdminLgn">Admin Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<section class="page-section about-heading">
  <div class="container">

    <div class="about-heading-content">
      <div class="row">
        <div class="col-xl-9 col-lg-10 mx-auto">
          <div class="bg-faded rounded p-5">
            <h2 class="section-heading mb-4">

              <span class="section-heading-lower">About Our Placement student Login</span>
            </h2>
            <p>You can get the user name and password by the contacting with your college faculty. They will provide you the login id and password.</p>
            <p class="mb-0">We give you opporunity to track your placement detail from  here. We have glad to server you better placement.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="container p-3 my-3 text-white col-md-6 ">


    <div class="form-group">
    <h1> Student Login</h1>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" name="username" onChange={this.onChange}   placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" name="password" onChange={this.onChange} placeholder="Password" />
    </div>
    <div class="form-group form-check">


   </div>


   <button type="submit" class="btn btn-primary" value="Login" onClick={this.slogin}>Login</button>


  </div>



	</div>


);
}
}
export default Studentlgn;
