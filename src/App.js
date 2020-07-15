import React from 'react';
import profileIcon from './profile.svg';
import './App.css';
// import Greet from './Greeting';
// import Count from './Counter';
import data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';

function App() {
  return (
   <BrowserRouter>
      <Route exact path='/host' component={Home} />
      <Route exact path='/resume' component={Resume} />
   </BrowserRouter>
  );
}

// Home

let Home= () =>{
  let profiles=data.profile;
  alert("Hello");
  return(
    <div className="row justify-content-center">
        {profiles.map((values,index)=>(
          <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
          <div className="card">
            <div className="card-body text-center">
              <img src={profileIcon} alt="profile Icon" style={{width:"30%"}}/>
              <h2>{values.basics.name}</h2>
              <h4 className="text-secondary">{values.basics.role}</h4>
              <a href={"tel:"+values.basics.phone}>
                <h4>{values.basics.phone}</h4>
              </a>
              <a href={"mailto:"+values.basics.email}>
                <h4>{values.basics.email}</h4>
              </a>
              <Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">View Profile</Link>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}

export default App;