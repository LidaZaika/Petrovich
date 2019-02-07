import React, { Component } from 'react';
import './App.css';
import Header from './Auto/Header';
import SectionName from './Auto/SectionName';
import CatalogPrice from './Auto/CatalogPrice';
import Footer from './Auto/Footer';
import {connect} from 'react-redux'
import {getProducts, filterProducts, filterProducts2, 
  sortProducts,sortProducts2 } from './action/products.action';


class Catalog extends React.PureComponent {
  
  constructor(props){
    super(props);
    this.props.getProducts();
    // this.props.filterProducts();
    // this.props.filterProducts2();
    // this.props.sortProducts();
    this.state={
     
    }
    this.filter=[]
  }; 
filterBy2=(event, value)=>{
  console.log(event.target.value);
if(event.target.checked){
  this.props.filterProducts();
}else {
  this.props.getProducts();
}

};
filterBy3=(event, value)=>{
    console.log(event.target.value);
    // this.filter.push()
if(event.target.checked){
  this.props.filterProducts2();
}else {
  this.props.getProducts();
}

};

  render() {
    const {products, getProducts, sortProducts}=this.props;
    
    
    return (
      <div className="Catalog">
        <Header />
        <SectionName />
        <CatalogPrice 
        data={products}
        click={getProducts}
        sortBy={sortProducts} 
        filterBy={this.filterBy2}
        filterByford={this.filterBy3}
        />
        <Footer />
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
  filterProducts: ()=> {
    filterProducts(dispatch)
  }
  ,
  filterProducts2: ()=> dispatch (filterProducts2())
  ,
  sortProducts: ()=> dispatch(sortProducts())
  ,
  
}
  
}
)(Catalog);
