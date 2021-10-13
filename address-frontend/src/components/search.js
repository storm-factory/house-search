import React from "react";

import SearchList from "./searchList"


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      showNoResults: false
    };
  }

  fetchSearchResults(){
    this.setState({results: [], showNoResults:false});
    let headers = {
      "Accept": "application/json"
    };

    fetch("http://127.0.0.1:3001/properties.json?filter="+this.state.query,{headers: headers}).then(response => response.json()).then((data) => {
      if(data.results.length){
        this.setState({results: data.results, showNoResults:false});
      }else {
        this.setState({showNoResults:true});
      }
    }).catch(err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div id="random-joke">
        <div className="row">
          <div className="col-sm-12 ">
            <h1>Search for an address:</h1>
            <input type="text" placeholder="Enter query" onChange={(e)=>{this.setState({query: e.target.value})}}></input>
            <button type="button" className="btn btn-dark" id="run-query" onClick={() => {this.fetchSearchResults()}}>Go!</button>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <SearchList results={this.state.results} query={this.state.query} showNoResults={this.state.showNoResults}></SearchList>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
