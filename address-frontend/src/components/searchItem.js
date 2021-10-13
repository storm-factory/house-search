import React from "react";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  render(){
    return (
      <p key={this.props.id}>
        <Link to={{pathname: "./property", state: {property: this.props.property, id: this.props.id}}}>{this.props.property.address}, {this.props.property.location} {this.props.property.state}</Link>
      </p>
    )
  }

}

export default SearchItem
