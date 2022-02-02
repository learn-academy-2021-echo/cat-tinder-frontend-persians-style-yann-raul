import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'

Enzyme.configure({ adapter: new Adapter() })



describe("When the CatIndex renders",() => {
  it("displays a list of cats", () => {
 
    const renderedApp = shallow(<CatIndex/>)
   
  
    const renderedCatIndex = renderedApp.find("CatIndex")
   
    expect(renderedCatIndex.length).toEqual(0)
   
  })

}) 