import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RecordsList from './RecordsList2';

export class ViewCampus extends Component {
  //test 01
  constructor(props){
    super(props);
    this.state = {students: []};
    //this.state = {redirectToReferrer: false,};
    this.logout = this.logout.bind(this);
  }

    componentDidMount(){
      axios.get('http://localhost:8888/api/View.php')
  .then(response => {
    this.setState({ students: response.data });
    console.log(response)

  })
  .catch(function(error)
  {
    console.log(error);
  })


    }
    //ending of componentDidMount
    usersList(){
      return this.state.students.map(function(object,i)
    {
      return <RecordsList obj={object} key={i} />;
    });
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
    <a href="/UpdateInfo"><i class="fa fa-user"></i> Update Own Info</a>

    <a href="/ViewCampus"><i class="fa fa-university"></i> View Campus</a>
    <hr class="sidebar-divider my-0" />
    <a href="/AppliedCampus"><i class="fa fa-eye"></i> Applied Campus</a>

  </div>


  <div class="main">
  	 <div class = "Container">
     <h3 align="center">Companies coming</h3>
     <table className="table table-dark" style={{ marginTop: 20 }}>
     <thead>
      <tr>
        <th class="bg-warning">Company Name</th>
        <th class="bg-warning">City</th>
        <th class="bg-warning">Branch</th>
        <th class="bg-warning">Pakage</th>
        <th class="bg-warning">Last date</th>
        <th class="bg-warning">Campus drive</th>

        <th colSpan="2" class="bg-warning">Action</th>
        </tr>
        </thead>
      <tbody>
     { this.usersList() }
   </tbody>
   </table>
      </div>
  </div>


</div>
);
}
}
export default ViewCampus;
