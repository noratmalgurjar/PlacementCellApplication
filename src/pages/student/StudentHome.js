import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';


export class StudentHome extends Component {

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
      this.getemail();
    }

    else{
      this.setState({redirectToReferrer: true});
    }

  }
  getemail(){

    let data = JSON.parse(sessionStorage.getItem("userData"));
    sessionStorage.setItem('mySessionStorageData',JSON.stringify(data.userData.email));
    let data2 = sessionStorage.getItem('mySessionStorageData');
    //this.setState({name:data.userData.name});
    //let postData = { user_id: data.userData.user_id};
    window.$name = data2
    console.log(data2)

  }

  logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/Studentlgn'}/>)
    }

    return (
  <div>



  <div class="sidenav">
    <br />    <br />    <br />    <br />    <br />    <br />    <br />       <br />
    <a href="#" onClick={this.logout} className="logout"><i class="fa fa-anchor" ></i>Logout</a>
    <a href="/StudentHome"><i class="fa fa-fw fa-home"></i> Home</a>
    <hr  />
    <a href={"/UpdateInfo/"}><i class="fa fa-user"></i> Update Own Info</a>

    <a href="/ViewCampus"><i class="fa fa-university"></i> View Campus</a>
    <hr class="sidebar-divider my-0" />
    <a href="/AppliedCampus"><i class="fa fa-eye"></i> Applied Campus</a>
     
  </div>


  <div class="main">
  	 <div class = "Container">
          <table  align="center" class="table table-striped table-light">
            <tr>
              <td scope="row" align="center">Student Info</td>
            </tr>
            <tr>
              <td scope="row" align="center">Hello Student! Here you can update your Info, and view campus which is coming in the
                College and you can directly apply from here!. You can get this User id and password from faculty so! now! you have to update Your
                password.
              </td>
            </tr>
          </table>
     </div>
    </div>
</div>

);
}
}
export default StudentHome;
