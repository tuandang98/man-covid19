import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
              {
                  name:this.props.listchart[0],
                  people:0,
              },
          ]
        }
        
          
       
        
      }
      componentDidMount() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

    
    
   
      let listmap = this.props.listchart.map(newItem => {            
        this.setState(prevState => ({
            data: prevState.data.map(
            obj => (obj.name === newItem ? Object.assign(obj, { people: obj.people+0.5 }) : obj)
          )
        }));
        if(this.state.data.map(
            value=>(value.name===newItem?1:0)).reduce(reducer,1)>1){
    
        }
        else{
            this.setState((prevState) => ({
            data: [ ...prevState.data, {name:newItem,people:1}],
          }));}
      });
      }
      componentWillReceiveProps(nextProps){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        this.setState(prevState => ({
            data: prevState.data.map(
            obj => (obj.name === nextProps.listchart[nextProps.listchart.length-1] ? Object.assign(obj, { people: obj.people+0.5 }) : obj)
          )
        }));
        if(this.state.data.map(
            value=>(value.name===nextProps.listchart[nextProps.listchart.length-1]?1:0)).reduce(reducer,1)>1){
    
        }
        else{
            this.setState((prevState) => ({
            data: [ ...prevState.data, {name:nextProps.listchart[nextProps.listchart.length-1],people:1}],
          }));}
      }
      render() {

        
        
        
        const { data } = this.state;
        
        return (
            <div >
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="people" fill="#8884d8" />
            </BarChart>
            
            
            </div>
          );
      }
    }

export default Chart;

