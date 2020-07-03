import React, { Component } from 'react';

class SearchBar extends Component {
    
  // handleSearch(e) {
  //   this.props.handleSearchQuery(e.target.value);
  // }

  // handleColumnSearch(value) {
  //   this.props.handleColumnSearch(value);
  // }

  render() {
    
    return (
<div class="row">
<form class="col s12">
  <div class="row">
  <div class="col s3"></div>
    <div class="input-field col s4">
      <i  class="material-icons prefix">search</i>
      <input 
        id="query" 
        type="text" 
        class="validate"
        value={this.props.query}
        onChange={(e) => this.props.handleSearchQuery(e.target.value)}
      />
      <label for="query">Tìm kiếm</label>
    </div>
    <div class="input-field col s2">
      <i class="material-icons prefix">filter_list</i>
      <select
        style={{ marginLeft: "1em" }}
        value={this.props.columnToQuery}
        onChange={(e) => this.props.handleSearchColumn(e.target.value)}
      >
        <option value="fullname">Tên</option>
        <option value="cmnd">CMND</option>
      </select>
      <label>Theo</label>
    </div>
  </div>
  <div class="col s3"></div>
</form>
</div>
    );
  }
}

export default SearchBar;

