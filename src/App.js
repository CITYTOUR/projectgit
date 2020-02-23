import React, {Component} from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./component/navbar/Navbar";
import TourList from "./component/tourlist/index";


class App extends Component{
 render(){
  return (
  <React.Fragment>

    <Navbar/>
    <TourList/>
  </React.Fragment>





  );
  
}
}

export default App;
