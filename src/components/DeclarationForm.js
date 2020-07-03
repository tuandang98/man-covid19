import React, { Component } from 'react';
import './DeclarationForm.css';

class DeclarationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {
        firstname: "",
        lastname: "",
        fullname: "",
        cmnd: "",
        sex: "Nam",
        email: "",
        age: "",
        address: "",
        phone_number: "",
        question1:{
          a1: false,
          a2: false,
        },
        question2:{
          a1: false,
          a2: false,
        },
        question3:{
          a1: false,
          a2: false,
        },
        question4:{
          a1: false,
          a2: false,
          a3: false,
        },
      },
    }   
  } 
  handleEditFirstName(e) {
    this.state.item.firstname = e.target.value;
    this.state.item.fullname = this.state.item.firstname + " " + this.state.item.lastname;
    this.setState({item: this.state.item});
  }

  handleEditLastName(e) {
    this.state.item.lastname = e.target.value;
    this.state.item.fullname = this.state.item.firstname + " " + this.state.item.lastname;
    this.setState({item: this.state.item});
  }
  
  handleEditId(e) {
    this.state.item.cmnd = e.target.value;
    this.setState({item: this.state.item});
  }

  handleEditSex(e) {
    this.state.item.sex = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleEditage(e) {
    this.state.item.age = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleEditAddress(e) {
    this.state.item.address = e.target.value;
    this.setState({item: this.state.item});
  }
  handleEditPhone(e) {
    this.state.item.phone_number = e.target.value;
    this.setState({item: this.state.item});
  }

  handleEditMail(e) {
    this.state.item.email = e.target.value;
    this.setState({item: this.state.item});
  }
  
  handleEditQ1Yes(e) {
    this.state.item.question1.a1 = true;
    this.state.item.question1.a2 = false;
    this.setState({item: this.state.item});
  }

  handleEditQ1No(e) {
    this.state.item.question1.a1 = false;
    this.state.item.question1.a2 = true;
    this.setState({item: this.state.item});
  }

  handleEditQ2Yes(e) {
    this.state.item.question2.a1 = true;
    this.state.item.question2.a2 = false;
    this.setState({item: this.state.item});
  }

  handleEditQ2No(e) {
    this.state.item.question2.a1 = false;
    this.state.item.question2.a2 = true;
    this.setState({item: this.state.item});
  }

  handleEditQ3Yes(e) {
    this.state.item.question3.a1 = true;
    this.state.item.question3.a2 = false;
    this.setState({item: this.state.item});
  }

  handleEditQ3No(e) {
    this.state.item.question3.a1 = false;
    this.state.item.question3.a2 = true;
    this.setState({item: this.state.item});
  }

  handleEditQ4A1(e) {
    this.state.item.question4.a1 = !this.state.item.question4.a1;
    this.setState({item: this.state.item});
  }

  handleEditQ4A2(e) {
    this.state.item.question4.a2 = !this.state.item.question4.a2;
    this.setState({item: this.state.item});
  }

  handleEditQ4A3(e) {
    this.state.item.question4.a3 = !this.state.item.question4.a3;
    this.setState({item: this.state.item});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
      item: {
        firstname: "",
        lastname: "",
        fullname: "",
        cmnd: "",
        sex: "Nam",
        email: "",
        age: "",
        address: "",
        phone_number: "",
        question1:{
          a1: false,
          a2: false,
        },
        question2:{
          a1: false,
          a2: false,
        },
        question3:{
          a1: false,
          a2: false,
        },
        question4:{
          a1: false,
          a2: false,
          a3: false,
        },
      }
    });
    document.getElementsByClassName("with-gap").checked=false;
  }

  render() {
    let renderRadio = (question,handleRadio,num,string) => {
      if (question === false) {
        return (
            <p>
              <label>
                <input class="with-gap" name={"questionx"+num} onClick={handleRadio} type="radio" />
                <span>{string}</span>
              </label>
            </p>
        );
      }
      else {
        return (
          <p>
           <label>
              <input className="with-gap" name={"questionx"+num} onClick={handleRadio} type="radio" checked />
              <span>{string}</span>
            </label>
          </p>
        );
      }
    };
    let renderCheckbox = (question,handleEditQ4,num) => {
      if (question === true) {
        return (
          <input className="with-gap" name={"question"+num} onClick={handleEditQ4} className="filled-in"  type="checkbox" checked="checked"  />
        );
      }
      else {
        return (
          <input className="with-gap" name={"question"+num} onClick={handleEditQ4} className="filled-in"   type="checkbox"  />
        );
      }
    }; 

    return (
      <div className="decla-form">

        <div className="row">
          <div className="col s12 ">
            <div className="card grey lighten-5">
              <div className="card-content black-text">
                <form className="declaration-form" onSubmit={(e)=>this.handleSubmit(e)}>
                  <div className="row" align="center"><h4>Tờ khai y tế</h4></div>
                  <div className="row"></div>
                  <div className="row"></div>
                  <div className="row">
                    <div className="col s2"><h6>Họ và tên đệm:</h6></div>
                    <div className="col s3"><input value={this.state.item.firstname} name="fullname" placeholder="VD: Đặng Hoàng" onChange={(e)=>this.handleEditFirstName(e)} variant="outlined" hintText="VD: Nguyen Van A" type="text" className="validate"/></div>
                    <div className="col s1"><h6>Tên:</h6></div>
                    <div className="col s2"><input  value={this.state.item.lastname} name="lastname" placeholder="Tuấn" onChange={(e)=>this.handleEditLastName(e)} type="text" className="validate"/></div>
                    <div className="col s1"></div>
                    <div className="col s1"><h6>Giới tính:</h6></div>
                    <div className="col s2">    
                      <select name="sex" value={this.state.item.sex} onChange={(e)=>this.handleEditSex(e)}>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s2"><h6>CMND:</h6></div>
                    <div className="col s2">    
                      <input  value={this.state.item.cmnd} name="cmnd" placeholder="VD: 142931649" onChange={(e)=>this.handleEditId(e)} type="text" className="validate"/>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col s2"><h6>Nơi ở hiện tại:</h6></div>
                    <div className="col s7"><input value={this.state.item.address} name="address" onChange={(e)=>this.handleEditAddress(e)} placeholder="Số nhà/Thôn, Xã/Phường, Quận/Huyện, Tỉnh/Thành phố" type="text" className="validate"/></div>
                  </div>
                  <div className="row">
                    <div className="col s2"><h6>Điện thoại:</h6></div>
                    <div className="col s3">          
                      <input value={this.state.item.phone_number} name="telephone" onChange={(e)=>this.handleEditPhone(e)} type="tel" className="validate"/>
                    </div>
                    <div className="col s1"></div>
                    <div className="col s1"><h6>Email</h6></div>
                    <div className="col s4"><input value={this.state.item.email} name="email" placeholder="example@gmail.com" onChange={(e)=>this.handleEditMail(e)} type="email" className="validate"/></div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12"><h6>Bạn có lưu trú, đi từ/qua vùng có Dịch (Trung Quốc, Anh, Hà Nội, TP Hồ Chí Minh,...):</h6>
                      <span className="helper-text" data-error="wrong" data-success="right">Trong vòng 14 ngày</span></div>
                    <br/><br/>
                    <div className="col s1"></div>
                    <div className="col s11" >  
                      {renderRadio(this.state.item.question1.a1,(e)=>this.handleEditQ1Yes(e),1,"Có")}
                      {renderRadio(this.state.item.question1.a2,(e)=>this.handleEditQ1No(e),1,"Không")}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="input-field col s12"><h6>Bạn có tiếp xúc với người bệnh hoặc nghi ngờ mắc bệnh COVID-19:</h6>
                      <span className="helper-text" data-error="wrong" data-success="right">Trong vòng 14 ngày</span></div>
                    <br/><br/>
                    <div className="col s1"></div>
                    <div className="col s11" >  
                    {renderRadio(this.state.item.question2.a1,(e)=>this.handleEditQ2Yes(e),2,"Có")}
                      {renderRadio(this.state.item.question2.a2,(e)=>this.handleEditQ2No(e),2,"Không")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12"><h6>Bạn có tiếp xúc với người từ nước có bệnh COVID-19:</h6>
                      <span className="helper-text" data-error="wrong" data-success="right">Trong vòng 14 ngày</span></div>
                    <br/><br/>
                    <div className="col s1"></div>
                    <div className="col s11" >  
                    {renderRadio(this.state.item.question3.a1,(e)=>this.handleEditQ3Yes(e),3,"Có")}
                      {renderRadio(this.state.item.question3.a2,(e)=>this.handleEditQ3No(e),3,"Không")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12"><h6>Bạn có thấy xuất hiện dấu hiệu:</h6>
                      <span className="helper-text" data-error="wrong" data-success="right">Trong vòng 14 ngày</span></div>
                    <br/><br/>
                    <div className="col s1"></div>
                    <div className="col s11" >  
                      <p>
                        <label>
                          {renderCheckbox(this.state.item.question4.a1,(e)=>this.handleEditQ4A1(e),4)}
                          <span>Sốt</span>
                        </label>
                      </p> 
                      <p>
                        <label>
                          {renderCheckbox(this.state.item.question4.a2,(e)=>this.handleEditQ4A2(e),4)}
                          <span>Ho</span>
                        </label>
                      </p>
                      <p>
                        <label>
                          {renderCheckbox(this.state.item.question4.a3,(e)=>this.handleEditQ4A3(e),4)}
                          <span>Khó thở</span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" >Gửi tờ khai</button>

                </form>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default DeclarationForm;