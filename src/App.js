import React, { Component } from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';


//feature-1
class App extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      size:"",
      sort:""


    };
    
  }
  sortProducts=(event)=>{
    const sort=event.target.value;
    console.log(event.target.value);
    this.setState((state)=>({
      sort:sort,
      products:this.state.products.slice().sort((a,b)=>
        sort=="lowest"
        ? a.price>b.price
        ?1
        :-1
        :sort=="highest"
        ? a.price<b.price
        ? 1
        :-1
        :a._id>b._i
        ?1
        :-1
      ),

    }))

    //impl
  }
  filterProducts=(event)=>{
    console.log(event.target.value);
    if(event.target.value === "")
    {
      this.setState({size:event,products:data.products})
    }
    else{

    
    this.setState({
      size: event.target.value,
      products: data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value)>=0),


    });
  }
    //impl
  };  
  render(){
  return (
     <div className="grid-container">
       <header>
         <a href="/"> React shopping cart </a>
       </header>
       <main>
         <div className="content">
          <div className="main">
          <Filter count={this.state.products.length}
                  size={this.state.size}
                   sort={this.state.products}
                   filterProducts={this.filterProducts}
                   sortProducts={this.sortProducts}></Filter> 
          <Products products={this.state.products}></Products>
          </div>
          <div className="sidebar">
          Cart items
          </div>

         </div>
         
       </main>
       <footer>
         All right is reserved 
       </footer>
      </div>

  );
}
}

export default App;
