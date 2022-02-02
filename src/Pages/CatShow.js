import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    const { cat } = this.props
    return(
      <>
        <h2>Cat Show Page</h2>
        <p>{cat.name}</p>
        <p>{cat.age}</p>
        <p>{cat.enjoys}</p>
        <img src={cat.image} alt="awesome cat pic" width=" 300px"/>
      </>
    )
  }
}
export default CatShow; 