import React, {Component} from "react";

import './main.css'
import {fetchData,getDetail} from "../services.js";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from 'react-router-dom';



  class Pagination extends React.Component{
      constructor(props){
          super(props);

        //   this.props = {
        //       pageInfo:{
        //         pageNum:,
        //         current:,
        //         pre:,
        //         next:,
        //       }  
        //   }
      }

      render(){
          let pagination = [];
          const pageInfo = this.props.pageInfo;
          const url = this.props.url;

          if(pageInfo.current === 1){
              pagination.push( (<li className = 'disabled' key ={0}><Link to = '#'>&laquo;</Link></li>) );
          }
          else{
            pagination.push( (<li key={0}><Link to = {`${url}/${pageInfo.pre}`} onClick ={this.props.setPageInfo(pageInfo.pageNum,pageInfo.pre,pageInfo.pre - 1,pageInfo.current)}>&laquo;</Link></li>) );
          }

          for(let i = 0; i < pageInfo.pageNum;i++){
              if(i + 1 == pageInfo.current){
                pagination.push( (<li className = 'active' key={i+1}><Link to = {`${url}/${i + 1}`} onClick ={this.props.setPageInfo(pageInfo.pageNum,i + 1,i,i - 1)}>{i + 1}</Link></li>) );
              }
              else{
                pagination.push( (<li key={i+1}><Link to = {`${url}/${i + 1}`} onClick ={this.props.setPageInfo(pageInfo.pageNum,i + 1,i,i - 1)}>{i + 1}</Link></li>) );
              }
            
          }

          if(pageInfo.current == pageInfo.pageNum){
            pagination.push( (<li className = 'disabled' key={pageInfo.pageNum+1}><Link to = '#'>&raquo;</Link></li>) );
          }
          else{
            pagination.push( (<li key={pageInfo.pageNum+1}><Link to = {`${url}/${pageInfo.next}`} onClick ={this.props.setPageInfo(pageInfo.pageNum,pageInfo.next,pageInfo.current,pageInfo.next + 1)}>&raquo;</Link></li>) );
          }

          return (
              <ul className = 'pagination'>
                
                {pagination}
              </ul>
          );
      }
  }

  class Article extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            topicsData:null
        }
    }
    setData(id){
        getDetail(id)
                .then((data) => {
                    let total = data.data;
                    
                    let topicsData={
                            id: total.id,
                            content:total.content
                        };
                    
                    this.setState({topicsData:topicsData});
                });
    }
    componentDidMount(){
        this.setData(this.props.match.params.id);
    }
      render(){
          const topicsData = this.state.topicsData ? this.state.topicsData :null;
          if(!topicsData){
              return (<div>数据加载中...</div>);
          }
          let content = topicsData.content;
          return (
              <div>
                  <button type="button" className="btn btn-primary btn-lg" onClick ={this.props.history.goBack}>返回</button>
                  <div dangerouslySetInnerHTML={{__html:`${content}`}}></div>
              </div>
          );
      }
  }

  class List extends React.Component{
    constructor(props){
        super(props);
        const id = Number.parseInt(props.id);
        this.state = {
            topicsData:null,
            pageInfo: {pageNum:10,
                current:id,
                pre:id - 1,
                next:id + 1
            }
        }
    }

    setPageInfo = () =>{
        return (pageNum,current,pre,next) =>{
            return () =>{
                
                const pageInfo = {pageNum:pageNum,
                                    current:current,
                                    pre:pre,
                                    next:next
                                };
                this.setState({pageInfo:pageInfo});
                
                }
        };
    }


    setData = ()=>{
        return (page) => fetchData(page)
                        .then((data) => {
                            let total = data.data;
                            let topicsData = total.map((val) =>{
                                return {
                                    id: val.id,
                                    title: val.title,
                                    content:val.content
                                };
                            });
                            this.setState({topicsData:topicsData});
                        });
    }
    componentDidMount(){
        this.setData()(this.props.id);
    }
      render(){
        let list = [];
        const topicsData = this.state.topicsData ? this.state.topicsData : null;

        if(!topicsData){
            return (<div>数据加载中...</div>);
        }

        for(let i of topicsData){
            
            if(i){
                let string = i.content;
                //获取文章前部分内容
                let div = document.createElement('div');
                div.innerHTML = string;
                string =div.innerText.slice(0,100) + '...';
                list.push(<Link to={`/detail/${i.id}`} className="list-group-item" key= {i.id}>
                            <h3 className="list-group-item-heading" style={{color:'blue'}}>{i.title}</h3>
                            <p className="list-group-item-text">{string}</p>
                        </Link>)
            }
        }
        // let pageInfo={
        //     pageNum:10,
        //     current:1,
        //     pre:null,
        //     next:2,
        //   }  
        return (
            <div>
                <ul className = 'list-group text'>
                    {list}
                </ul>
                <Pagination pageInfo={this.state.pageInfo} setPageInfo={this.setPageInfo} url={this.props.url}/>
            </div>
        );
      }
  }

  class Topics extends React.Component{
    constructor(props){
        super(props);
        
        
    }

    render(){
        const id = this.props.match.params.id;

        if(id>10||id<1){
            return (<div>404</div>);
        }
        return (
           
            <div>
                
                <Route exact path={`/list/${id}`} component={()=><List id ={id} url = '/list'/>}/>
                    
            </div>
           
        );
    }
  }

  

  export {Topics,Article};
 
