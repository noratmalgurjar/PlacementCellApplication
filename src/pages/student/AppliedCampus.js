import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RecordsList from './RecordsList';
export class AppliedCampus extends Component {

  constructor(props) {
    super(props);
    this.state = {students: []};

    this.logout = this.logout.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:8888/api/appliedCampus.php')
    .then(response=>{
      this.setState({ students: response.data });
        console.log(response)
    })

    .catch(function(error){
      console.log(error);
    })
  }
  usersList(){
    return this.state.students.map(function(object,i){
      return <RecordsList obj={object} key={1} />;
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
     <div>
     <h3 align="center" >Applied Campus</h3>
     <table className="table table-striped" style={{ marginTop: 20}}>
     <thead>
       <tr>
         <th class="bg-warning">Comapany Name </th>
         <th class="bg-warning">City Name </th>
         <th class="bg-warning">Pakage as Annual </th>
         <th class="bg-warning">Campusdrive in college </th>


         <th colSpan="2" class="bg-warning">Your choice</th>
       </tr>
     </thead>
       <tbody>
       {this.usersList()}
       </tbody>
     </table>
   </div>
      </div>
  </div>


</div>
);
}
}
export default AppliedCampus;
