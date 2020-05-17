import React, {Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
export default class RecordsList extends Component{
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
          redirect: false
        }
        }
        delete(){
	           axios.get('http://localhost:8888/api/deleteApplied.php?id='+this.props.obj.id)
	           .then(this.setState({redirect:true}))
	           .catch(err => console.log(err))
	}
  render(){
    const { redirect } = this.state;
    if(redirect){
      return <Redirect to='/AppliedStudent'/>;
    }
    return(
      <tr>
        <td class="bg-info">
          {this.props.obj.sname}
        </td>
        <td class="table-light">
          {this.props.obj.email}
        </td>
        <td class="bg-info">
          {this.props.obj.companyname}
        </td>
        <td class="table-light">
          {this.props.obj.campusdrive}
        </td>



        <td  class="Active">
          <button onClick={this.delete} className="btn btn-danger">Remove Student</button>
        </td>
      </tr>
    );
  }
}
