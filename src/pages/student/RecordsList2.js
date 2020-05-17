import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
class RecordsList extends Component{
  constructor(props){
    super(props);
     
    this.state = {
      redirect: false
    }
  }


  render(){
    const {redirect} = this.state;
    if(redirect){
      return <Redirect to='/view'/>;
    }

    return(

    <tr>

        <td>
          {this.props.obj.companyName}
        </td>
        <td>
          {this.props.obj.city}
        </td>
        <td>
          {this.props.obj.branch}
        </td>
        <td>
          {this.props.obj.pakage}
        </td>
        <td>
          {this.props.obj.lastdate}
        </td>
        <td>
          {this.props.obj.city}
        </td>
        <td>
          <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Apply</Link>
        </td>

      </tr>
    );
  }
}

export default RecordsList;
