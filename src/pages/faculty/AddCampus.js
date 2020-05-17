import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class AddCampus extends Component {



    constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
      this.onChangecompanyName = this.onChangecompanyName.bind(this);
      this.onChangecity = this.onChangecity.bind(this);
      this.onChangepakage = this.onChangepakage.bind(this);
      this.onChangelastdate = this.onChangelastdate.bind(this);
      this.onChangebranch = this.onChangebranch.bind(this);
      this.onChangeeligibility = this.onChangeeligibility.bind(this);
      this.onChangecampusdive = this.onChangecampusdive.bind(this);
      this.inserCam = this.inserCam.bind(this);
      this.state = {
      companyName: '',
      city: '',
      pakage: '',
      lastdate: '',
      branch: '',
      eligibility: '',
      campusdive: '',
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
    onChangecompanyName(e){
      this.setState({
        companyName: e.target.value
      });
    }
    onChangecity(e){
      this.setState({
        city: e.target.value
      });
    }
    onChangepakage(e){
      this.setState({
        pakage: e.target.value
      });
    }
    onChangelastdate(e){
      this.setState({
        lastdate: e.target.value
      });
    }
    onChangebranch(e){
      this.setState({
        branch: e.target.value
      });
    }
    onChangeeligibility(e){
      this.setState({
        eligibility: e.target.value
      });
    }
    onChangecampusdive(e){
      this.setState({
        campusdive: e.target.value
      });
    }
    inserCam(e){
          e.preventDefault();

          const obj = {
            companyName: this.state.companyName,
            city: this.state.city,
            pakage: this.state.pakage,
            lastdate: this.state.lastdate,
            branch: this.state.branch,
            eligibility: this.state.eligibility,
            campusdive: this.state.campusdive,

          };
          axios.post('http://localhost:8888/api/Add/Addpla.php',obj)
          .then(res => console.log(res.data));

            //console.log(obj)
            this.setState({
              companyName: '',
              city: '',
              pakage: '',
              lastdate: '',
              branch: '',
              eligibility: '',
              campusdive: '',


            })
        }


render(){
  if (this.state.redirectToReferrer) {
    return (<Redirect to={'/Facultylgn'}/>)
  }
        return  (
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
  <div class="container p-3 my-3 text-white col-md-6 ">

        <form onSubmit={this.inserCam}  >
            <div class="form-group">
              <h1>Add Campus</h1>
              <label for="exampleInputEmail1">Company Name</label>
              <input type="text" class="form-control" name="companyName"
              value={this.state.companyName}
              onChange={this.onChangecompanyName}
                placeholder="Enter company Name" />

              </div>
              <div class="form-group">
              <label for="exampleInputPassword1">City of company</label>
              <input type="text" class="form-control" name="city"
              value={this.state.city}
              onChange={this.onChangecity}
               placeholder="City" />
              </div>

              <div class="form-group">
              <label for="exampleInputPassword1">Annual Package</label>
              <input type="text" class="form-control" name="pakage"
              value={this.state.pakage}
              onChange={this.onChangepakage}
                placeholder="Package" />
              </div>

              <div class="form-group">
              <label for="exampleInputPassword1">Last date of Applied</label>
              <input type="text" class="form-control" name="lastdate"
              value={this.state.lastdate}
              onChange={this.onChangelastdate}
              placeholder="lastdate" />
              </div>

              <div class="form-group">
              <label for="exampleInputPassword1">Branch of</label>
              <input type="text" class="form-control" name="branch"
              value={this.state.branch}
              onChange={this.onChangebranch}
               placeholder="Branch" />
              </div>

              <div class="form-group">
              <label for="exampleInputPassword1">Eligibility</label>
              <input type="text" class="form-control" name="eligibility"
              value={this.state.eligibility}
              onChange={this.onChangeeligibility}
                placeholder="Eligibility" />
              </div>

              <div class="form-group">
              <label for="exampleInputPassword1">Campus Drive Date</label>
              <input type="text" class="form-control" name="campusdive"
              value={this.state.campusdive}
              onChange={this.onChangecampusdive}
                placeholder="Campus Drive Date" />
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
export default AddCampus;
