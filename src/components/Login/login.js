/**
 * Created by Counter on 7/1/2017.
 */
import React, { Component } from 'react';
import * as actions from '../../actions/authActions'
import {connect} from 'react-redux'
import './login.css';
import  user_image from '../../static/images/user.png'

export class Login extends Component {

    constructor(props){
        super(props);
        this.state={

            error:""
        };
        this._handleSubmit= this._handleSubmit.bind(this);
        this._handleInput= this._handleInput.bind(this);
    }

    componentWillReceiveProps(newProps){
        if(newProps.isAuthenticated){
            this.props.history.push('/home')
        }
    }


    _handleSubmit(){

        if(this.validateEmail()){
            this.setState({
                error:""
            });
            let user = {
                email:this.state.email,
                password:this.state.password
            };
            this.props.login(user)
        }
        else{
            this.setState({
                error:"Email is not valid"
            })
        }
    }


    _handleInput(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    validateEmail(){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
    }

    render() {
        const {error} =this.state;
        const {authenticationError}=this.props
        return (
            <div className="loginContainer">
                <div className="loginContainer_header">
                    <h4>Login</h4>
                </div>
                <div className="loginContainer_body">
                    <form  >
                        <input type="text" name="email" placeholder="Enter Email Address" onChange={this._handleInput}/>
                        {(error!=='')?<span className="error">
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>{error}</span>:<span></span>}
                        <input type="password" name="password" placeholder="Enter Password" onChange={this._handleInput}/>
                        {(authenticationError!=='')?<span className="error">
                        <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>{authenticationError}<br/></span>:<span></span>}
                        <input type="button" value="Login" onClick={this._handleSubmit}/>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        isAuthenticated:state.auth.isAuthenticated,
        authenticationError:state.auth.authenticationError

    }
};

export default connect(mapStateToProps,actions)(Login);
