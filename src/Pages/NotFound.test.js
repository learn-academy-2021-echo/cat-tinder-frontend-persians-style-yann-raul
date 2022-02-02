import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })



describe("When the NotFound renders",() => {
  it("displays a page", () => {
 
    const renderedApp = shallow(<NotFound/>)
   
  
    const renderedNotFound = renderedApp.find("NotFound")
   
    expect(renderedNotFound.length).toEqual(0)
   
  })

}) 