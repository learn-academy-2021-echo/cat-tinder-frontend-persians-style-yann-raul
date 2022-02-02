import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })



describe("When the Home renders",() => {
  it("displays a page", () => {
 
    const renderedApp = shallow(<Home/>)
   
  
    const renderedHome = renderedApp.find("Home")
   
    expect(renderedHome.length).toEqual(0)
   
  })

})
