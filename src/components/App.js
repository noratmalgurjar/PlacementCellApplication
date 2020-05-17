import React from 'react';
import {Provider} from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Home} from '../pages/Home';
import {AdminLgn} from '../pages/admin/AdminLgn';
import {Adminhome} from '../pages/admin/Adminhome';
import {Studentlgn} from '../pages/student/Studentlgn';
import {Facultylgn} from '../pages/faculty/Facultylgn';
import {Facultyhome} from '../pages/faculty/Facultyhome';
import {AddStudent} from '../pages/faculty/AddStudent';
import {AddCampus} from '../pages/faculty/AddCampus';
import {AppliedStudent} from '../pages/faculty/AppliedStudent';
import {StudentView} from '../pages/admin/StudentView';
import Edit from '../pages/student/Edit';
import {StudentHome} from '../pages/student/StudentHome';
import {AppliedCampus} from '../pages/student/AppliedCampus';
import {UpdateInfo} from '../pages/student/UpdateInfo';
import {ViewCampus} from '../pages/student/ViewCampus';
import './css/vendor/fontawesome-free/css/all.min.css';
import {Addfaculty} from '../pages/admin/Addfaculty';
import {Refer} from '../pages/Refer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Header} from './Header';
import {Navbar} from './Navbar';
import {Footer} from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/business-casual.min.css';
import Actions from '../Actions/Actions';

 
import './css/sb-admin-2.css';
class App extends Actions{
  
    render(){
        
        
        return (
                
            
                <React.Fragment> 
                     
                      <Header />
                    <Router>
                <Switch>
                
                <Route path="/home" component={Home} />
                <Route path="/AdminLgn" component={AdminLgn} />
                <Route path="/Adminhome" component={Adminhome} />
                <Route path="/Studentlgn" component={Studentlgn} />
                <Route path="/Facultylgn" component={Facultylgn} />
                <Route path="/Facultyhome" component={Facultyhome} />
                <Route path="/AddStudent" component={AddStudent} />
                <Route path="/AddCampus" component={AddCampus} />
                <Route path="/AppliedStudent" component={AppliedStudent} />
                <Route path="/AppliedCampus" component={AppliedCampus} />
                <Route path="/StudentHome" component={StudentHome} />
                <Route path="/UpdateInfo" component={UpdateInfo} />
                <Route path="/ViewCampus" component={ViewCampus} />
                <Route path="/Addfaculty" component={Addfaculty} />
                <Route path="/StudentView" component={StudentView} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/" component={Refer} />

                </Switch>
              
                    </Router>
                    <Footer />
                </React.Fragment>
             
                 
            
             
 

        )
    }
}
export default App;