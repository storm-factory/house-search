import React from "react";
import SearchItem from "./searchItem";

class SearchList extends React.Component {
  render() {
    if(this.props.results.length){
      return (
        <div className="row">
          <div className="col-md-12 col-sm-12">
            {this.props.results.map((r) => <SearchItem property={r} id={r.id} key={r.id}></SearchItem> )}
          </div>
        </div>
      )
    }else if (this.props.showNoResults) {
      return (
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h2>No results for:</h2>
            <h3>{this.props.query}</h3>
            <h2>:(</h2>
          </div>
        </div>
      )
    }else {
      return (
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h2>Enter a query above!</h2>
          </div>
        </div>
      )
    }
  }

}

export default SearchList;
