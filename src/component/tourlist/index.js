import React, {Component} from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import {tourData} from  "../../tourdata";
export default class TourList extends Component{
    state = {
        tours: tourData
    };

    removeTour= id =>{
        const{tours} =this.state;
        const sorted= tours.filter( tour =>tour.id!==id);
         this.setState({
             tours:sorted
         });
    };

    render(){

        const{tours}= this.state;
        return (
            <section className="tour-list">
               {tourData.map(tour=> (<Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>))}



            </section>
          
          
          
          
          
            );
            
    }
} 
