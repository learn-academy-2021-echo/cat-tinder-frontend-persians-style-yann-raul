import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter() })



describe("When the CatShow renders",() => {
  it("displays a page", () => {
 
    const renderedApp = shallow(<CatShow/>)
   
  
    const renderedCatShow = renderedApp.find("CatShow")
   
    expect(renderedCatShow.length).toEqual(0)
   
  })

}) 