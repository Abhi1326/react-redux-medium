
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component{

    render(){
        return(
            <header className="header">
                <div className="container">
                    <nav className="nav-tabs ">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <h3 className="navbar-brand" > Medium </h3>
                            </div>
                            <ul className="nav navbar-nav navbar-right ul-text-center">
                                <li><a href="#">Write a story</a></li>
                                <li><a href="#" className="text-success">SignIn/SignUp</a></li>
                                <li><a href="#" className="glyphicon glyphicon-search"></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="search_top">
                    <nav className="nav-tabs">
                        <div className="container">
                            <ul className="nav navbar-nav nav-position">
                                <li><a href="#">Home</a></li>
                                <li><a href="#" >Audio</a></li>
                                <li><a href="#" >Video</a></li>
                                <li><a href="#">Technology</a></li>
                                <li><a href="#" >Audio</a></li>
                                <li><a href="#" >Video</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        )
    }
}

export default Header

