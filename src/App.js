
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
  import mockCats from './mockCats'
  




class App extends Component{
  render(){
    return(
      <Router>
       <Header/>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catindex" component={CatIndex} />
        <Route path="/catshow" component={CatShow} />
        <Route path="/catnew" component={CatNew} />
        <Route path="/catedit" component={CatEdit} />
        <Route component={NotFound}/>
       </Switch>
       <Footer/>
       </Router>

    )
  }
}

export default App;