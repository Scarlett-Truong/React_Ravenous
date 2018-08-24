import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends Component{
    render(){
        return(
            <div className="BusinessList">
                {
                    this.props.businesses.map( eachbusiness => {return <Business key={eachbusiness.id} business={eachbusiness}/>;} )
                }
            </div>
        );
    }
}

export default BusinessList;