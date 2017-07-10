/**
 * Created by Counter on 7/1/2017.
 */
/**
 * Created by Counter on 7/1/2017.
 */

import React,{Component} from 'react'
import Header from '../Header/header'
import './home.css'
import  article_image from '../../static/images/article_img.jpeg'
import  user_image from '../../static/images/user.png'
import * as actions from '../../actions/authActions'
import {connect} from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import dummydata from '../../common/Dummydata'




export class Home extends Component{
    constructor(props){

        super(props);
        if(!localStorage.getItem('key')){
            this.props.history.push('/')
        }

        this.state = {
            divs: [],
            changeLoad:false
        };
        this.generateDivs = this.generateDivs.bind(this);
        this.refresh = this.refresh.bind(this);
        this._openBlog= this._openBlog.bind(this);

    }

    componentDidMount(){
        document.getElementById({})

    }
    componentWillMount(){

        this.indentsShow =[];

        this.indents = dummydata.map((data, i) => (
            <div key={"div"+ data.id} className="col-md-5 article-container" onClick={()=>this._openBlog(data)}>
                <div className="col-md-5 article-img-container"><img className="avatar" src={article_image}/></div>
                <div className="col-md-6">
                    <h2 className="titleBlog">{data.title}</h2>
                    <h3 className="titlePreview">{data.preview}</h3>
                    <h4>‘Tour de Pharmacy’ works very hard to be very silly</h4>
                    <div className="row">
                        <div  className="col-md-6">
                            <img  className="avatar_thumbnail img-circle" src={user_image}/>
                            <p className="titleTime">{data.time}</p>
                        </div>
                        <div  className="col-md-6">
                            <span style={{    position: 'relative', left: '90%',textAlign:'right'}}><i className="glyphicon glyphicon-saved "></i></span>
                        </div>
                    </div>

                </div>
            </div>
        ))

        for(let i=0;i<4;i++){
            this.indentsShow[i] = this.indents[i]
        }

        this.setState({
            divs:this.indentsShow
        })
    }

    componentWillReceiveProps(newProps){
        if(!newProps.isAuthenticated){
            this.props.history.push('/')
        }
    }

    _openBlog(data){
        localStorage.setItem("blogData", JSON.stringify(data));
        this.props.history.push('/blog/'+data.id)
    }


    generateDivs () {

        if(this.state.divs.length <= this.indents.length){
            let moreDivs = this.indentsShow;
            let count = this.state.divs.length;
            for (let i = count; (i < (count+4) && i<this.indents.length); i++) {
                moreDivs.push(
                    <div key={"div"+dummydata[i].id} className="col-md-5 article-container" onClick={()=>this._openBlog(dummydata[i])}>
                        <div className="col-md-5 article-img-container"><img className="avatar" src={article_image}/></div>
                        <div className="col-md-6">
                            <h2 className="titleBlog">{dummydata[i].title}</h2>
                            <h3 className="titlePreview">{dummydata[i].preview}</h3>
                            <h4>‘Tour de Pharmacy’ works very hard to be very silly</h4>
                            <div className="row">
                                <div  className="col-md-6">
                                    <img  className="avatar_thumbnail img-circle" src={user_image}/>
                                    <p className="titleTime">{dummydata[i].time}</p>
                                </div>
                                <div  className="col-md-6">
                                    <span style={{    position: 'relative', left: '90%',textAlign:'right'}}><i className="glyphicon glyphicon-saved "></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            setTimeout(() => {
                this.setState({divs: this.state.divs.concat(moreDivs)});
            }, 500);
        }else{
            this.setState({
                changeLoad:true
            })
        }

    }

    refresh () {
        this.setState({divs: []});
        setTimeout(() => {
            this.setState({divs:this.indentsShow});
        }, 3000);
    }


    render(){


        return(
            <div>
                <Header logout={this.props.logout}/>
                <div>
                    <div className="container ">
                        <div className="medium-body " >
                            <h1 className="banner-heading">
                                Home to unique
                                ideas from the
                                world’s smart
                                minds.
                            </h1>
                            <p className="banner-body">Hear directly from the people who know it best. From tech to politics to creativity and more —
                                whatever your interest, we’ve got you covered.</p>

                            <button className=" banner-btn filled btn btn-default">Get started</button>
                            <button className=" banner-btn blank btn-default bg-warning btn"> Learn More</button>
                        </div>
                        <div>
                            <div className="row page-header ">
                                <h2 className="col-md-3">
                                    Home
                                </h2>
                                <h6 className="text-right col-md-9 " style={{paddingTop:'24px'}}><a href="#">more <span className="glyphicon glyphicon-arrow-right"></span></a></h6>
                            </div>

                            <div>
                                <InfiniteScroll
                                    pullDownToRefresh
                                    pullDownToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>}
                                    releaseToRefreshContent={<h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>}
                                    refreshFunction={this.refresh}
                                    next={this.generateDivs}
                                    hasMore={true}
                                    style={{overflow:"hidden"}}
                                    loader={this.state.changeLoad?<h1></h1>:<h1 className="cool_loading">Loading....</h1>}>
                                    {
                                        this.state.divs
                                    }
                                </InfiniteScroll>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        )
    }
}
const mapStateToProps=(state)=>{


    return {
        isAuthenticated:state.auth.isAuthenticated
    }
};


export default connect(mapStateToProps,actions)(Home);
