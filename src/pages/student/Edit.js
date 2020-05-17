import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router';
export default class Edit extends Component{

  constructor(props){

    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      redirect: false
    }
  }






  onChangeFirstName(e){
    this.setState({
      first_name: e.target.value
    });
  }

  onChangeLastName(e){
    this.setState({
      last_name: e.target.value
    });
  };
  onChangeEmail(e){
    this.setState({
      email:e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const obj = {
      //id: this.state.sid,
      first_name:window.$name.replace(/['"]+/g, ''),
      last_name: this.state.last_name,
      email: this.state.email,
    };
      axios.post('http://localhost:8888/api/apply.php?id='+this.props.match.params.id, obj)
        .then(res=>console.log(res.data),
          this.setState({redirect: true})
      );

    }

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


  render()
  {

    const {redirect} = this.state;
    if(redirect){
      return <Redirect to='/ViewCampus'/>;
    }
    return(


     <div>
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
     </div>

     <div>
     <table align="center">
     <div>
      <form onSubmit={this.onSubmit}>
        <div className ="form-group">

          <input type="hidden" className="form-control"
            value={window.$name.replace(/['"]+/g, '')}
            value={this.state.first_name}
            onChange={this.onChangeFirstName}
           />
        </div>

        <div className ="form-group">

          <input type="hidden" className="form-control"
          value={this.state.last_name}
          onChange={this.onChangeLastName}
          />
        </div>

        <div className ="form-group">

          <input type="hidden" className="form-control"
          value={this.state.email}
          onChange={this.onChangeEmail}
          />
        </div>
        <div className ="form-group">

          <input type="submit" value="if you confrome to Applying! Click here." className="btn btn-primary"/>
        </div>

        </form>
        </div>
        </table>
        </div>
     </div>
  )
  }
}
