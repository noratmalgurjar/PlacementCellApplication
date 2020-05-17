 
import React,{Component} from 'react';
import axios from 'axios';



export   class Addfaculty extends Component {




    constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.inserFac = this.inserFac.bind(this);

        this.state = {
        email: '',
        password: ''

      }
    }
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

    onChangeEmail(e){
      this.setState({
        email: e.target.value
      });
    }

    onChangePassword(e){
    this.setState({
      password: e.target.value
    });
  }
  inserFac(e){
        e.preventDefault();

        const obj = {
          email: this.state.email,
          password: this.state.password,

        };
        axios.post('http://localhost:8888/api/Add/Addfac.php',obj)
        .then(res => console.log(res.data));

          //console.log(obj)
          this.setState({
            email: '',
            password: ''

          })
      }


render(){
  if (this.state.redirectToReferrer) {
    return (<Redirect to={'/AdminLgn'}/>)
  }

        return  (
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
  <div class="container p-3 my-3 text-white col-md-6 ">

        <form onSubmit={this.inserFac} >
            <div class="form-group">
              <h1>Add Faculty</h1>
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" name="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
                placeholder="Enter email as Username" />

              </div>
              <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control"    name="password"
              value={this.state.password}
              onChange={this.onChangePassword}
               placeholder="Password" />
              </div>
              <div class="form-group form-check">

              </div>


              <button type="submit" class="btn btn-primary">Add</button>
        </form>

    </div>
  </div>


</div>
);
    }
}
export default Addfaculty;
