import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom';



export class Adminhome extends Component {

  constructor(props) {
    super(props);

    this.state = {


      redirectToReferrer: false,

    };


    this.logout = this.logout.bind(this);
  }
  //This is used for not access in the Home page
  componentWillMount() {

    if(sessionStorage.getItem("userData")){

    }

    else{
      this.setState({redirectToReferrer: true});
    }

  }

  logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/AdminLgn'}/>)
    }

    return (
      <div>



      <div class="sidebar">
      <br />    <br />    <br />    <br />    <br />    <br />    <br />       <br />
      <a href="#" onClick={this.logout} className="logout"><i class="fa fa-anchor" ></i>Logout</a>
      <a href="/Adminhome"><i class="fa fa-fw fa-home"></i> Home</a>

      <hr  />
      <a href="/Addfaculty"><i class="fa fa-users"></i> Add Faculty</a>

      <a href="/StudentView"><i class="fa fa-eye"></i> View Student</a>
      <hr class="sidebar-divider my-0" />
       
      </div>


      <div class="main">
      <div class = "Container">
      <table  align="center" class="table table-striped table-light">
        <tr>
          <td scope="row" align="center">Admin Info</td>
        </tr>
        <tr>
          <td scope="row" align="center">Here you are for helping student if they forget the password.

          </td>
        </tr>
        <tr>
           <td scope="row" align="center">
            You can add faculty member from here!.
           </td>
        </tr>
        <tr>
           <td scope="row" align="center">
            You can review the all student, how much they are enorlled by the faculty member.
           </td>
        </tr>
      </table>
      </div>
      </div>


      </div>
    );
  }
}

export default Adminhome;
