import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom';



export class Facultyhome extends Component {

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
      return (<Redirect to={'/Facultylgn'}/>)
    }

    return (
  <div>



  <div class="sidebar">
    <br />    <br />    <br />    <br />    <br />    <br />    <br />       <br />
    <a href="#" onClick={this.logout} className="logout"><i class="fa fa-anchor" ></i>Logout</a>
    <a href="/Facultyhome"><i class="fa fa-fw fa-home"></i> Home</a>
    <hr  />
    <a href="/AddStudent"><i class="fa fa-users"></i> Add Students</a>

    <a href="/AddCampus"><i class="fa fa-university"></i> Add Capmpus</a>
    <hr class="sidebar-divider my-0" />
    <a href="/AppliedStudent"><i class="fa fa-eye"></i> Applied Students</a>

  </div>


  <div class="main">
  	 <div class = "Container">
     <table  align="center" class="table table-striped table-light">
       <tr>
         <td scope="row" align="center">Faculty Info</td>
       </tr>
       <tr>
         <td scope="row" align="center">Here you are for helping student to get the better placed in the company.

         </td>
       </tr>
       <tr>
          <td scope="row" align="center">
           You can add here student, and campus detail from here! and it will diplay to the all student.
          </td>
       </tr>
       <tr>
          <td scope="row" align="center">
           Student will applied the job from there panel!. you can see the all applied student from your panel.
          </td>
       </tr>
     </table>
      </div>
  </div>


</div>
);
}
}
export default Facultyhome;
