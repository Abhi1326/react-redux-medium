
import React from "react";
import ReactDOM from 'react-dom'
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Header from "./header";
import {MemoryRouter} from "react-router";

test('Header component should render as expected',()=>{
    const component =shallow(<MemoryRouter><Header/></MemoryRouter>);
    const tree =toJson(component);
    expect(tree).toMatchSnapshot()
});

test('Header should load without crahing',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter ><Header/></MemoryRouter>, div);
});

