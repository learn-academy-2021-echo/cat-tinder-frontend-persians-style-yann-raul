import React, { Component } from 'react'
import mycat2 from '../Assets/mycat2.png'



class Home extends Component {
  render() {
    return (

      <div className="page-body">
        <br />
        <h3>Welcome to Cat Tinder!</h3>
        <br />
        <img src={mycat2} alt="logo for Cat Tinder" className="cat-logo"/>
        
        <br />
        <br />
        <br />
        <h4>It's like Tinder, but for Cats.</h4>
        <br />
        


        
      </div>
    )
  }
}













export default Home; 


