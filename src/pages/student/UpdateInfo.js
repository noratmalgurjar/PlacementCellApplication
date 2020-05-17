import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom';
import {AppContext} from '../../components/Context';
import {PostData} from '../../services/PostData';
import axios from 'axios';


export class UpdateInfo extends Component {
      constructor(props)
        {
          super(props);
          this.logout = this.logout.bind(this);
          this.onChangeFirstName = this.onChangeFirstName.bind(this);
          this.onChangeLastName = this.onChangeLastName.bind(this);
          this.onChangeEmail = this.onChangeEmail.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
          this.state = {
            first_name: '',
            last_name: '',
            email:'',
            redirect: false
          }

}
  //test01
  static contextType = AppContext;
  viewUser = (event) => {
      this.context.viewUser(event,this.email.value);
  }


    componentDidMount(){
        //this.context.get_users2();

        axios.get('http://localhost:8888/api/Edit.php?id='+window.$name.replace(/['"]+/g, ''))
        .then(response=>{
          this.setState({
            first_name: response.data.name,
            last_name: response.data.email,
            email: response.data.password });
            console.log(response.data)
          })
          .catch(function(error) {
            console.log(error);
          })
}
  onChangeFirstName(e){
    this.setState({
      first_name:e.target.value
    })
  }
  onChangeLastName(e){
    this.setState({
      last_name:e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email:e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const obj = {
  //id:this.state.id,
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email
};
    axios.post('http://localhost:8888/api/placementUpdate.php?id='+window.$name.replace(/['"]+/g, ''), obj)

            .then(res => console.log(res.data),
            this.setState({redirect:true}));
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


  <div class="sidebar">
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

     <table width="50%" align="center">
      <div style={{marginTop:10}}>
      <h3 class="text-warning">Update your info</h3>

      <form onSubmit={this.onSubmit}>
        <div className="form-group">
        <label class="text-light">Name:</label>
        <input type="text" className="form-control"
          value={this.state.first_name}
          onChange={this.onChangeFirstName}
          />
        </div>
   <div className="form-group">
        <label class="text-light">Email:</label>
          <input type="text" className="form-control"
            value={this.state.last_name}
              onChange={this.onChangeLastName}
              />
   </div>
        <div className="form-group">
          <label ><p class="text-light">Password:</p></label>
            <input type="text" className="form-control"
              value={this.state.email}
                onChange={this.onChangeEmail}
                />
   </div>
   <div className="form-group">

     <input type="submit" value="Update Info" className="btn btn-primary" />
   </div>
 </form>

 </div>
          <p class="text-center"> </p>

</table>
      </div>
  </div>


</div>
);
}
}
export default UpdateInfo;
