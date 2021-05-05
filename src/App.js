import React , { Component } from 'react';
import './App.css';
import Signin from './Components/Signin/Signin';
import Navigation from './Components/Navigations/Navigation';
import Register from './Components/Register/Register';
import 'tachyons';
import Admin from './Components/Admin/Admin';
import Cardl from './Components/Cards/Cardl';
import {products} from './products';
import SearchBox from './Components/Cards/SearchBox';


class App extends Component{
  constructor(){
    super();
    this.state={
      route:'signin',
      isSignedIn: false ,
      isAdmin: false ,
      products: products,
      searchfield: ''
    }
    
  }

  componentDidMount(){
		fetch('./products.js').then(response=>{return response.json();}).then(users=>this.setState({ products :users }));
	}

  

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }else if(route === 'home'){
      this.setState({isSignedIn: true})
    }
		this.setState({route: route});
    if(route === 'admin'){
      this.setState({isAdmin: true})
    }
	}

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    
  }
 


  render(){
    const {isSignedIn, route, isAdmin  } = this.state;
    const filteredProducts = this.state.products.filter(product => {
      return product.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
      <div className="App"> 
      <Navigation isSignedIn={isSignedIn} isAdmin={isAdmin} onRouteChange={this.onRouteChange} />
        { route === 'home' ?
        <div>
          <h1>PRODUCTS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Cardl products={filteredProducts} />
        </div> : (
          route === 'signin'  
          ? <Signin onRouteChange={this.onRouteChange}/> 
          : (route === 'admin' ? <Admin onRouteChange={this.onRouteChange}/> :  <Register onRouteChange={this.onRouteChange}/>)
        )
        }
      </div>
    )
  }
}

export default App;
