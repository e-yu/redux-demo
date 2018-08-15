import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from '../../services.js';

import { ContainListFilter } from './ContainListFilter';
import { ContainPagination } from './ContainPagination';
import { ContainList } from './ContainList';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
//引入store
import { store } from '../../index';
//引入action
import { actions } from '../action'

function filter(tabs) {
    for(let item of tabs){
        if(item.isCheck) {
            if(item.name == 'all')
                return '';
            else {
                return item.name;
            }
            
        }
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.flag = false ; //判断数据是否加载完成
    }

    setData = () => {
        
        store.dispatch(actions.startFetch());
        
        
        return (page,tab) => fetchData(page,tab)
            .then((data) => {
                let total = data.data;
                let topicsData = total.map((val) => {
                    return {
                        id: val.id,
                        title: val.title,
                        content: val.content,
                        tab:val.tab
                    };
                });
                store.dispatch(actions.setList(topicsData));
                this.flag = true ;
                store.dispatch(actions.finishFetch());
                store.dispatch(actions.setPageCurrent(Number.parseInt(this.props.match.params.id)));
                store.dispatch(actions.setIndex(topicsData.map((val) => {
                    return val.id;
                })));
            });
    }

    componentDidMount() {
        if(!store.getState().fetchState.isFetching&&!this.flag){
            
            this.setData()(Number.parseInt(this.props.match.params.id),filter(this.props.tabs));
        }else {
            this.flag = false;
        }
    }

    componentDidUpdate() {
        if(!store.getState().fetchState.isFetching&&!this.flag){
            
            this.setData()(Number.parseInt(this.props.match.params.id),filter(this.props.tabs));
        }else {
            this.flag = false;
        }
        
    }

    render() {
        
        if(this.props.match.params.id < 1 || !Number.isInteger(Number.parseInt(this.props.match.params.id))) {
            return (<div>404</div>);
        }

        if (store.getState().fetchState.isFetching) {
            return (<div>数据加载中...</div>);
        }
        
        return (

            <div>

                <ContainListFilter/>
                <ContainList/>
                <ContainPagination/>

            </div>

        );
    }
};

const mapStateToProps = function(state){
    return {
        isFetching: state.fetchState.isFetching,
        tabs:state.setTabs.tabs
    };
};

const content = connect(mapStateToProps)(Content);

export { content as Content } ;