import React, { Component } from 'react';
// import Select from '@material-ui/core/Select';
import { Select } from 'react-materialize';
import MenuItem from '@material-ui/core/MenuItem';
import './DeclarationForm.css';

class EditForm extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "Anh",
            fullname:"",
            cmnd: "",
            sex: "Nam",
            email: "",
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
    }

    componentDidMount(){
      this.setState({
        firstname: this.props.firstname,
            lastname: this.props.lastname,
            fullname: this.props.firstname+" "+this.props.lastname,
            cmnd: this.props.cmnd,
            sex: this.props.sex,
            email: this.props.email,
            class: this.props.class_name,
            address: this.props.address,
            phone_number: this.props.phone_number,
            question1:{
            a1: this.props.question1a1,
            a2: this.props.question1a2,
            },
            question2:{
            a1: this.props.question2a1,
            a2: this.props.question2a2,
            },
            question3:{
            a1: this.props.question3a1,
            a2: this.props.question3a2,
            },
            question4:{
            a1: this.props.question4a1,
            a2: this.props.question4a2,
            a3: this.props.question4a3,
            },
      });
    }

    handleCancel(e) {
      e.preventDefault();
      this.props.stopEditing(e);
    }

    handleEditFirstName(e) {
      this.state.firstname = e.target.value;
      this.state.fullname = this.state.firstname + " " + this.state.lastname;
      this.setState({item: this.state});
    }
  
    handleEditLastName(e) {
      this.state.lastname = e.target.value;
      this.state.fullname = this.state.firstname + " " + this.state.lastname;
      this.setState({item: this.state});
    }

    handleChange(e) {
        var target = e.target;
        var id = target.id;
        var value = target.value;
        this.setState({
            [id]: value
        });
    }

    handleEditQ1Yes(e) {
      this.state.question1.a1 = true;
      this.state.question1.a2 = false;
      this.setState({item: this.state});
    }
  
    handleEditQ1No(e) {
      this.state.question1.a1 = false;
      this.state.question1.a2 = true;
      this.setState({item: this.state});
    }
  
    handleEditQ2Yes(e) {
      this.state.question2.a1 = true;
      this.state.question2.a2 = false;
      this.setState({item: this.state});
    }
  
    handleEditQ2No(e) {
      this.state.question2.a1 = false;
      this.state.question2.a2 = true;
      this.setState({item: this.state});
    }
  
    handleEditQ3Yes(e) {
      this.state.question3.a1 = true;
      this.state.question3.a2 = false;
      this.setState({item: this.state});
    }
  
    handleEditQ3No(e) {
      this.state.question3.a1 = false;
      this.state.question3.a2 = true;
      this.setState({item: this.state});
    }
  
    handleEditQ4A1(e) {
      this.state.question4.a1 = !this.state.question4.a1;
      this.setState({item: this.state});
    }
  
    handleEditQ4A2(e) {
      this.state.question4.a2 = !this.state.question4.a2;
      this.setState({item: this.state});
    }
  
    handleEditQ4A3(e) {
      this.state.question4.a3 = !this.state.question4.a3;
      this.setState({item: this.state});
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.handleSave(this.state,this.props.card_index);
      this.setState({
        firstname: "",
        lastname: "",
        fullname: "",
        cmnd: "",
        sex: "Nam",
        email: "",
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
      });
      this.props.stopEditing(e);
    }

    render() {
        
        let renderRadio = (question,cmnd,num,handleRadio) => {
            if (question === true) {
              return (
                  <p>
                    <label>
                      <input class="with-gap" name={String(cmnd+num)} onClick={handleRadio} type="radio" checked />
                      <span></span>
                    </label>
                  </p>
              );
            }
            else {
              return (
                <p>
                 <label>
                    <input class="with-gap" name={String(cmnd+num)} onClick={handleRadio} type="radio" 
        
                    />
                    <span></span>
                  </label>
                </p>
              );
            }
          };
        
          let renderCheckbox = (question,cmnd,num,handleCheckbox) => {
            if (question === true) {
              return (
                <input class="with-gap" name={String(cmnd+num)} onClick={handleCheckbox}   type="checkbox" checked="checked"  />
              );
            }
            else {
              return (
                <input class="with-gap" name={String(cmnd+num)} onClick={handleCheckbox}   type="checkbox"  />
              );
            }
          };
        return (
            <div className="edit-form">
            <form onSubmit={(e)=>this.handleSubmit(e)}>
            <h6>
                <div class="row">
                  <div class="col s1">
                   <div class="row"></div> <i  class="material-icons prefix">account_circle</i>
                  </div>
                  <div class="col s3"> 
                    <input value={this.state.firstname} id="firstname" placeholder="VD: Đặng Hoàng" onChange={(e)=>this.handleEditFirstName(e)}  type="text" class="validate"/>
                    <label for="firstname">Họ và tên đệm</label>
                  </div>
                  <div class="col s2">
                    <input value={this.state.lastname} id="lastname" placeholder="VD: Tuấn" onChange={(e)=>this.handleEditLastName(e)} type="text" class="validate"/>
                    <label htmlFor="lastname">Tên</label>
                  </div>
                  <div class="col s1"></div>
                  <div class="col s2">
                  <div class="row"></div>
                  <div class="row"></div>

                            Giới tính:
                    </div>
                        <div class="col s2">
                            <Select value={this.state.sex} id="sex" onChange={(e)=>this.handleChange(e)}>
                                <option value="Nam" >Nam</option>
                                <option value="Nữ" >Nữ</option>
                            </Select>
                        </div>
                </div>
              </h6>
            
              <h6>
                <div class="row">
                  <div class="col s1">
                    <div class="row"></div><i  class="material-icons prefix">receipt</i>
                  </div>
                  <div class="col s1"></div>
                  <div class="col s1"><div class="row"></div>MSSV: </div>
                  <div class="col s2">                    
                    <input value={this.state.cmnd} id="cmnd" placeholder="VD: 142931649" onChange={(e)=>this.handleChange(e)}  type="text" class="validate"/>
                    </div>
                </div>
              </h6>

              <h6>
                <div class="row">
                  <div class="col s1">
                    <div class="row"></div>
                    <i  class="material-icons prefix">home</i>
                  </div>
                  <div class="col s4">
                    <input value={this.state.address} id="address"  placeholder="Số nhà/Thôn, Xã/Phường, Quận/Huyện, Tinht/Thành phố" type="text" onChange={(e)=>this.handleChange(e)} class="validate"/>
                    <label for="address">Nơi ở hiện tại</label>
                  </div>
                </div>
              </h6>

              <h6>
                <div class="row">
                  <div class="col s1">
                  <div class="row"></div>
                    <i  class="material-icons prefix">local_phone</i>
                  </div>
                  <div class="col s4">
                    <input value={this.state.phone_number} id="phone_number"  type="tel" onChange={(e)=>this.handleChange(e)} class="validate"/>
                    <label for="phone_number">Điện thoại</label>
                  </div>
                  <div class="col s1">
                  <div class="row"></div>
                    <i  class="material-icons prefix">local_post_office</i>
                  </div>
                  <div class="col s4">
                    <input value={this.state.email} id="email" placeholder="example@gmail.com" onChange={(e)=>this.handleChange(e)}  type="email" class="validate"/>
                    <label for="email">Email</label>
                  </div>
                </div>
              </h6>


              <table>
                <thead>
                  <tr>
                    <th width="170"></th>
                    <th width="30">Có</th>
                    <th width="30">Không</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td width="170"><h6>Có lưu trú, đi từ/qua vùng có Dịch (Trung Quốc, Anh, Mỹ, Đức Hà Nội, TP Hồ Chí Minh,...)</h6></td>
                    <td>
                      {renderRadio(this.state.question1.a1,this.state.cmnd,1,(e)=>this.handleEditQ1Yes(e))}
                    </td>
                    <td>
                      {renderRadio(this.state.question1.a2,this.state.cmnd,1,(e)=>this.handleEditQ1No(e))}
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Có tiếp xúc với người bệnh hoặc nghi ngờ mắc bệnh COVID-19</h6></td>
                    <td>
                      {renderRadio(this.state.question2.a1,this.state.cmnd,2,(e)=>this.handleEditQ2Yes(e))}
                    </td>
                    <td>
                      {renderRadio(this.state.question2.a2,this.state.tudent_id,2,(e)=>this.handleEditQ2No(e))}
                    </td>
                  </tr>
                  <tr>
                    <td><h6>Bạn có tiếp xúc với người từ nước có bệnh COVID-19</h6></td>
                    <td>
                     {renderRadio(this.state.question3.a1,this.state.cmnd,3,(e)=>this.handleEditQ3Yes(e))}
                    
                    </td>
                    <td>
                    {renderRadio(this.state.question3.a2,this.state.cmnd,3,(e)=>this.handleEditQ3No(e))}
                     
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="row">
                    <div class="input-field col s12"><h6>Bạn có thấy xuất hiện dấu hiệu:</h6>
                      <span class="helper-text" data-error="wrong" data-success="right">Trong vòng 14 ngày</span></div>
                    <br/><br/>
                    <div class="col s1"></div>
                    <div class="col s11" >  
                      <p>
                        <label>
                          {renderCheckbox(this.state.question4.a1,this.state.cmnd,4,(e)=>this.handleEditQ4A1(e))}
                          <span>Sốt</span>
                        </label>
                      </p> 
                      <p>
                        <label>
                        {renderCheckbox(this.state.question4.a2,this.state.cmnd,4,(e)=>this.handleEditQ4A2(e))}
                          <span>Ho</span>
                        </label>
                      </p>
                      <p>
                        <label>
                        {renderCheckbox(this.state.question4.a3,this.state.cmnd,4,(e)=>this.handleEditQ4A3(e))}
                          <span>Khó thở</span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <button id="submit" class="btn btn-primary" >Lưu lại</button>
                  <button id="cancel" class="btn btn-primary" onClick={(e)=>this.handleCancel(e)} >Hủy</button>
                  </form>
                  </div>
        );
    }
}



export default EditForm;