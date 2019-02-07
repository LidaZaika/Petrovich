import React, { Component } from 'react';
import './App.css';
import Catalog from './Auto/Catalog';
import {connect} from 'react-redux'
import {getProducts} from './action/products.action';

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.props.getProducts();
   
    this.state={
     
    }
   
  }; 
  render() {
    const {products}=this.props;
    return (
      <div className="Catalog">
             <Catalog 
             data={products}
             />  
      </div>
    );
  }
}
export default connect((state)=>{
  return{
    products: state.products,
  };
 
}, (dispatch)=>{
return{
  getProducts: ()=>{
    getProducts(dispatch)
  },
   
}
  
}
)(App);
