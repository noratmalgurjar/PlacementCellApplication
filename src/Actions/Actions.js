import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
  state = {
    users:[],
    users2:[]
  }


  // FETCH USERS FROM DATABASE
  fetchUsers = () => {
    Axios.get('http://localhost:8888/api/all-users.php')
    .then(({data}) => {
      if(data.success === 1){
        this.setState({
          users:data.users.reverse()
        });
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  // ON EDIT MODE
  editMode = (id) => {
    let users = this.state.users.map(user => {
      if(user.id === id){
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });

    this.setState({
      users
    });
  }

  //CANCEL EDIT MODE
  cancelEdit = (id) => {
    let users = this.state.users.map(user => {
      if(user.id === id){
        user.isEditing = false;
        return user;
      }
      return user

    });
    this.setState({
      users
    });
  }

  // UPDATE USER
  handleUpdate = (id,name,email,password) => {
    Axios.post('http://localhost:8888/api/update-user.php',
    {
      id:id,
      name:name,
      email:email,
      password:password
    })
    .then(({data}) => {
      if(data.success === 1){
        let users = this.state.users.map(user => {
          if(user.id === id){
            user.name = name;
            user.email = email;
            user.password = password;
            user.isEditing = false;
            return user;
          }
          return user;
        });
        this.setState({
          users
        });
      }
      else{
        alert(data.msg);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }


  // DELETE USER
  handleDelete = (id) => {
    let deleteUser = this.state.users.filter(user => {
      return user.id !== id;
    });

    Axios.post('http://localhost/placementPhp/delete-user.php',{
      id:id
    })
    .then(({data}) => {
      if(data.success === 1){

        this.setState({
          users:deleteUser


        });
      }
      else{
        alert(data.msg);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
  //new update..
  // FETCH USERS FROM DATABASE
  fetchUsers2 = () => {
    Axios.get('http://localhost:8888/api/all-users2.php')
    .then(({data}) => {
      if(data.success === 1){
        this.setState({
          users2:data.users2.reverse()
        });
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  //Fetching the placement data.

  fetchUsers3 = () => {
    Axios.get('http://localhost/placementPhp/all-users3.php')
    .then(({data}) => {
      if(data.success === 1){
        this.setState({
          users:data.users.reverse()
        });
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  // ON EDIT MODE
  editMode2 = (id) => {
    let users2 = this.state.users2.map(user2 => {
      if(user2.id === id){
        user2.isEditing = true;
        return user2;
      }
      user2.isEditing = false;
      return user2;
    });

    this.setState({
      users2
    });
  }

  //CANCEL EDIT MODE
  cancelEdit2 = (id) => {
    let users2 = this.state.users2.map(user2 => {
      if(user2.id === id){
        user2.isEditing = false;
        return user2;
      }
      return user2

    });
    this.setState({
      users2
    });
  }

  // UPDATE USER
  handleUpdate2 = (id,user_name,user_email) => {
    Axios.post('http://localhost/placementPhp/Apply.php',
    {
      id:id,
      user_name:user_name,
      user_email:user_email
    })
    .then(({data}) => {
      if(data.success === 1){
        let users2 = this.state.users.map(user2 => {
          if(user2.id === id){
            user2.user_name = user_name;
            user2.user_email = user_email;
            user2.isEditing = false;
            return user2;
          }
          return user2;
        });
        this.setState({
          users2
        });
      }
      else{
        alert(data.msg);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }


  // DELETE USER
  handleDelete2 = (id) => {
    let deleteUser = this.state.users2.filter(user2 => {
      return user2.id !== id;
    });

    Axios.post('http://localhost/placementPhp/delete-user.php',{
      id:id
    })
    .then(({data}) => {
      if(data.success === 1){

        this.setState({
          users:deleteUser


        });
      }
      else{
        alert(data.msg);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }


  //test
  // INSERT USER
  viewUser = (event,email) => {
    event.preventDefault();
    event.persist();
    Axios.get('http://localhost/placementPhp/all-users2.php',{
      email:email
    })
    .then(function ({data}) {
      if(data.success === 1){
        alert(data.msg);
        event.target.reset();
      }
      else{
        alert(data.msg);
      }
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }
  //test for viewing
  insertUser = (event,email,password) => {
    event.preventDefault();
    event.persist();
    Axios.post('http://localhost/placementPhp/add-faculty.php',{
      email:email,
      password:password
    })
    .then(function ({data}) {
      if(data.success === 1){
        alert(data.msg);
        event.target.reset();
      }
      else{
        alert(data.msg);
      }
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }
  //Adding Student by faculty.
  insertStudent = (event,email,password) => {
    event.preventDefault();
    event.persist();
    Axios.post('http://localhost/placementPhp/add-student.php',{
      email:email,
      password:password
    })
    .then(function ({data}) {
      if(data.success === 1){
        alert(data.msg);
        event.target.reset();
      }
      else{
        alert(data.msg);
      }
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }
  //Adding placement through the faculty.
  insertCampus = (event,companyName,city,pakage,lastdate,branch,eligibility,campusdive) => {
    event.preventDefault();
    event.persist();
    Axios.post('http://localhost/placementPhp/addplacement.php',{
      companyName:companyName,
      city:city,
      pakage:pakage,
      lastdate:lastdate,
      branch:branch,
      eligibility:eligibility,
      campusdive:campusdive
    })
    .then(function ({data}) {
      if(data.success === 1){
        alert(data.msg);
        event.target.reset();
      }
      else{
        alert(data.msg);
      }
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  //testing 03


}

export default Actions;
