
   import React, { Component } from 'react'
   
   import Header from './Components/Header'
   import Footer from './Components/Footer'
   import CatEdit from './Pages/CatEdit'
   import CatIndex from './Pages/CatIndex'
   import CatNew from './Pages/CatNew'
   import CatShow from './Pages/CatShow'
   import Home from './Pages/Home'
   import NotFound from './Pages/NotFound'
   import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
  
  import './App.css'
  




  class App extends Component{
    constructor(props){
      super(props)
      this.state = {
        cats: []
    }
  }
    componentDidMount(){
        this.readCat()
    }
      
    readCat = () => {
      fetch("http://localhost:3000/cats")
      .then(response => response.json())
      .then(catsArray => this.setState({cats: catsArray}))
      .catch(errors => console.log("Cat read errors:", errors))
    }

    createCat = (newCat) => {
      fetch("http://localhost:3000/cats", {
       
        body: JSON.stringify(newCat),
        
        headers: {
          "Content-Type": "application/json"
        },
        
        method: "POST"
      })
      .then(response => response.json())
      .then(payload => this.readCat())
      .catch(errors => console.log("Cat create errors:", errors))
    }

    updateCat = (cat, id) => {
      fetch(`http://localhost:3000/cats/${id}`, {
        
        body: JSON.stringify(cat),
       
        headers: {
          "Content-Type": "application/json"
        },
        
        method: "PATCH"
      })
      .then(response => response.json())
      .then(payload => this.readCat())
      .catch(errors => console.log("Cat update errors:", errors))
    }

    deleteCat = (id) => {
      fetch(`http://localhost:3000/cats/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })
      .then(response => response.json())
      .then(payload => this.readCat())
      .catch(errors => console.log("delete errors:", errors))
    }


  


    render(){
      return(
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route
              path="/catindex"
              render={(props) => <CatIndex cats={this.state.cats} />}
            />
  
            <Route
              path="/catshow/:id"
              render={(props) => {
                let paramId = +props.match.params.id
                let cat = this.state.cats.find(cat => cat.id === paramId)
                return <CatShow cat={cat} />
              }}
            />
  
            <Route
              path="/catnew"
              render={(props) => <CatNew createCat={this.createCat} />}
            />
  
            <Route path="/catedit" component={CatEdit} />
            <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </Router>
  
      )
    }
  }















  
  
  
  export default App;