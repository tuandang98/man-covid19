import React, { Component } from 'react';
import DeclarationForm from "./DeclarationForm.js"
import orderBy from "lodash/orderBy";
import CardInfo from "./CardInfo.js"
import SearchBar from "./SearchBar.js"
import './App.css';
import Chart from './Chart.js';


class App extends Component {
    
  constructor() {
    super();
    this.state = {
      data: [
        {
          firstname: "Đỗ Thúy",
          lastname: "Nga",
          fullname: "Đỗ Thúy Nga",
          cmnd: "111111111",
          sex: "Nữ",
          age: "22",
          address: "Hà Nội",
          phone_number: "034345656",
          email: "dothuynga@gmail.com",
          question1: {
            a1: false,
            a2: true,
          },
          question2: {
            a1: true,
            a2: false,
          },
          question3: {
            a1: true,
            a2: false,
          },
          question4: {
            a1: true,
            a2: false,
            a3: false,
          },
        },
        {
          firstname: "Đặng Hoàng",
          lastname: "Tuấn",
          fullname: "Đặng Hoàng Tuấn",
          cmnd: "142931649",
          sex: "Nam",
          age: "22",
          address: "Hải Dương",
          phone_number: "0123456789",
          email: "watsuthevabean@gmail.com",
          question1: {
            a1: false,
            a2: true,
          },
          question2: {
            a1: true,
            a2: false,
          },
          question3: {
            a1: true,
            a2: false,
          },
          question4: {
            a1: true,
            a2: false,
            a3: false,
          },
        },
       
        {
          firstname: "Nguyễn Hữu",
          lastname: "Mạnh",
          cmnd: "22222222",
          sex: "Nam",
          age: "21",
          address: "Hà Nội",
          phone_number: "034576245",
          email: "manhnguyen@gmail.com",
          question1: true,
          question2: true,
          question3: true,
          question4: {
            a1: true,
            a2: false,
            a3: false,
          },
        },
        // {
        //   firstname: "Lê Thanh",
        //   lastname: "Nam",
        //   cmnd: "20162157",
        //   sex: "male",
        //   age: "22",
        //   address: "Nghe An",
        //   phone_number: "0123456789",
        //   email: "lenam@gmail.com",
        //   question1: true,
        //   question2: true,
        //   question3: true,
        //   question4: {
        //     a1: true,
        //     a2: false,
        //     a3: false,
        //   },
        // },
      ],
      editIdx: -1,
      query: "",
      columnToQuery: "fullname"
    }   
  } 

  startEditing(index) {
    this.setState({editIdx: index });
    console.log(index);
  }

  stopEditing(e) {
    this.setState({ editIdx: -1 });
    e.preventDefault();
  }

  handleTitleEdit(e) {
    this.state.item.title = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleDesEdit(e) {
    this.state.item.description = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleAddItem(data) {
    if (data.firstname.trim() === "") return
    this.setState({data: [...this.state.data,data]}, () => {
      localStorage.setItem("data", JSON.stringify(this.state.data))
    });
    alert("Thêm thành công")
  }

  handleSave(temp,index) {
    var data = this.state.data;
    data[index] = temp;
    this.setState({
      data : data
    });
  }
  
  handleDeleteItem(index) {
    this.state.data.splice(index, 1);
    this.setState({data: this.state.data});
  }

  handleSearchQuery(query) {
    this.setState({query: query});
  }
  
  handleSearchColumn(columnToQuery) {
    this.setState({columnToQuery: columnToQuery});
  }

    
  render() {
    
    const lowerCaseQuery = this.state.query.toLowerCase();

    let data = orderBy(this.state.query? this.state.data.filter(x => String(x[this.state.columnToQuery]).toLowerCase().includes(lowerCaseQuery)): this.state.data);
    
    let list = data.map((item,index) => {
        return (
            <CardInfo
                key = {index}
                firstname = {item.firstname}
                lastname = {item.lastname}
                cmnd  = {item.cmnd}
                sex = {item.sex}
                age = {item.age} 
                address = {item.address}
                phone_number = {item.phone_number}
                email = {item.email}
                question1 = {item.question1}
                question2 = {item.question2}
                question3 = {item.question3}
                question4 = {item.question4}
                handleDelete = {()=>this.handleDeleteItem(index)}
                startEditing = {()=>this.startEditing(index)}
                stopEditing = {(e)=>this.stopEditing(e)}
                editIdx = {this.state.editIdx}
                handleSave = {(temp,i)=>this.handleSave(temp,i)}
                card_index = {index}
              />
            
        )
    });
    var chart=[];
    
    let listchart = data.map((item,index) => {
      return (
        chart.push(item.address)
      )
  });
      
    return (
      <div>
      <header className="header-new">
      <div className="card">
              <ul className="tabs">
                <li className="tab col s6">
                  <a className="black-text active" href="#form" ><h6>Nhập phiếu</h6></a>
                </li>
                <li className="tab col s6">
                  <a href="#list" className="black-text">
                    <h6>Danh sách</h6>
                  </a>
                </li>
                <li className="tab col s6">
                  <a href="#chart" className="black-text">
                    <h6>Biểu đồ</h6>
                  </a>
                </li>
              </ul>
        </div>
        </header>
        <div className="container">
        <div className="row mt-20">
            <div id="form" className="col s12">
              <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                  <DeclarationForm addItem={(data)=>this.handleAddItem(data)}></DeclarationForm>
                  
                </div>
               <div className="col s1"></div>
              </div>
            </div>
            <div id="list" className="col s12">
            <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                  <SearchBar
                    query={this.state.query}
                    columnToQuery={this.state.columnToQuery}
                    handleSearchQuery={(query)=>this.handleSearchQuery(query)}
                    handleSearchColumn={(value)=>this.handleSearchColumn(value)}
                  ></SearchBar>
                  {list}
                  {/* <EditForm></EditForm> */}
                </div>
                <div className="col s1"></div>
              </div>
              
            </div>
            <div id="chart" className="col s12">
              <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                  <Chart listchart={chart}></Chart>
                </div>
               <div className="col s1"></div>
              </div>
            </div>
          </div>
          </div>
          </div>
    );
  }
}

export default App;