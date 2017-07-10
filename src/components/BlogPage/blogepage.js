/**
 * Created by consultadd on 8/7/17.
 */
/**
 * Created by Counter on 7/1/2017.
 */
/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'
import Header from '../Header/header'
import './blogpage.css'
import * as actions from '../../actions/authActions'
import {connect} from 'react-redux'
import  back_image from '../../static/images/background.jpg'
import _ from 'underscore'

let showblogData='';

export class BlogPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            change:false,
            changeComment:"heart_like"
        }

        if(!localStorage.getItem('key')){
            this.props.history.push('/')
        }

        this.likeButton = this.likeButton.bind(this)
        this.comment_liked = this.comment_liked.bind(this)
        this.maincomment_liked = this.maincomment_liked.bind(this)

        showblogData = JSON.parse(localStorage.getItem("blogData"))

    }

    componentDidMount(){


    }

    componentWillReceiveProps(newProps){
        if(!newProps.isAuthenticated){
            this.props.history.push('/')
        }
    }

    likeButton(){
        if(this.state.change){
            this.setState({
                change: false
            })
        }else{
            this.setState({
                change: true
            })
        }
    }

    comment_liked(e){

        if(e.target.className === 'fa fa-heart-o heart_like'){
            e.target.className = 'fa fa-heart-o heart_unlike'
        }else if(e.target.className === 'fa fa-heart-o heart_unlike'){
            e.target.className = 'fa fa-heart-o heart_like'
        }
    }

    maincomment_liked(e){
        if(e.target.className === 'fa fa-heart-o heart_like'){
            e.target.className = 'fa fa-heart-o heart_unlike'
        }else if(e.target.className === 'fa fa-heart-o heart_unlike'){
            e.target.className = 'fa fa-heart-o heart_like'
        }
    }



    render(){

        let comments = _.map(_.pluck(showblogData, 'comments'), function (c) { return c})
       console.log("comments",comments)

        return(

            <div>
                <Header logout={this.props.logout}/>
                <div>
                    <img className="bngdImage" src={back_image} />
                </div>
                <div>
                    {

                            <div>
                                <div className='content shift_content'>
                                    <div className='post' id='post-1'>
                                        <img src='http://lorempixel.com/900/300' />
                                        <ul>
                                            <li className='icon-clock'>{showblogData.time}</li>
                                            <li className='icon-user'>by Mark Murray</li>
                                            <li className='icon-comment'>0 comments</li>
                                            <li className='icon-tag'>art, fashion</li>
                                        </ul>
                                        <h1>{showblogData.title}</h1>
                                        <p>{showblogData.content}</p>
                                        <p>{showblogData.slug}</p>
                                        {/*<button className='read-more'>Read More</button>*/}
                                        <div className="shift_below row">
                                            <div className="col-md-8">
                                                {this.state.change ? <i onClick={this.likeButton} className="fa fa-heart icon_change" aria-hidden="true"></i>:<i  onClick={this.likeButton} className="fa fa-heart-o icon_change" aria-hidden="true"></i>}
                                                <i className="fa fa-share icon_shift" aria-hidden="true"></i>
                                                <i className="fa fa-bookmark-o icon_shift" aria-hidden="true"></i>
                                            </div>
                                            <div className="col-md-4">
                                                {this.state.change ?  <button>More post like this!!!!</button>: <p></p>}
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <div className="comments">
                                        <div className="comment-wrap">
                                            <div className="photo">
                                                <div className="avatar" style={{backgroundImage: `url(${'https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg'})`}}></div>
                                            </div>
                                            <div className="comment-block">
                                                <form action="">
                                                    <textarea name="" id="" cols="30" rows="3" placeholder="Add comment..."></textarea>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        showblogData.comments.map((comm, i) => (
                                            <div key={i}>
                                                <div className="comments" >

                                                    <div className="comment-wrap">
                                                        <div className="photo">
                                                            <div className="avatar" style={{backgroundImage:`url(${'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'})`}}></div>
                                                        </div>
                                                        <div className="comment-block">
                                                            <p className="comment-text">{comm.cmt}</p>
                                                            <div className="bottom-comment">
                                                                <div className="comment-date">Aug 24, 2014 @ 2:35 PM</div>
                                                                <ul className="comment-actions">
                                                                    <li className="complain">Complain</li>
                                                                    <li className="reply">Reply</li>
                                                                    <li onClick={this.maincomment_liked}><i className="fa fa-heart-o heart_like" aria-hidden="true"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {
                                                            comm.nested.map((nescomm, i) => (

                                                                <div className="comment-wrap1" key={i}>
                                                                    <div className="photo">
                                                                        <div className="avatar" style={{backgroundImage: `url(${'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'})`}}></div>
                                                                    </div>
                                                                    <div className="comment-block">
                                                                        <p className="comment-text">{nescomm.ncmt}</p>
                                                                        <div className="bottom-comment">
                                                                            <div className="comment-date">Aug 23, 2014 @ 10:32 AM</div>
                                                                            <ul className="comment-actions">
                                                                                <li className="complain">Complain</li>
                                                                                <li className="reply">Reply</li>
                                                                                <li onClick={this.comment_liked}><i className="fa fa-heart-o heart_like" aria-hidden="true"></i></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            ))}
                                                    </div>
                                                </div>
                                            </div>

                                        ))}

                                </div>
                            </div>


                        }

                </div>


            </div>

        )
    }
}
const mapStateToProps=(state)=>{

};


export default connect(mapStateToProps,actions)(BlogPage);

