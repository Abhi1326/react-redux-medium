/**
 * Created by Counter on 7/2/2017.
 */

import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {Home} from "./home";
import localStorageMock from "../../mock-local-storage";
import {MemoryRouter} from "react-router";

window.localStorage = localStorageMock;

test('Home component should render as expected',()=>{
    const component =shallow(<MemoryRouter  initialEntries={ ['/home'] }
                                            initialIndex={0}><Home/></MemoryRouter>);
    const tree =toJson(component);
    expect(tree).toMatchSnapshot()
});
