import React from 'react';
import { connect } from 'react-redux';
import { Article } from '../details/Article';
import { Reply } from '../details/Reply';
import { fetchData, getDetail } from '../../services.js';
//引入store
import { store } from '../../index';
//引入action
import { actions } from '../action';

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

class Detail extends React.Component{

    constructor(props){
        super(props);

        this.flag1 = false;
        this.flag2 = false;
        this.content = null;
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
                this.flag1 = true ;

                store.dispatch(actions.setPageCurrent(Number.parseInt(this.props.match.params.num)));
                store.dispatch(actions.setIndex(topicsData.map((val) => {
                    return val.id;
                })));
                store.dispatch(actions.finishFetch());
            });
    }

    setReplies = () => {
        store.dispatch(actions.startFetch());

        return (id) => getDetail(id)
            .then((data) => {
                let total = data.data;

                
                this.content = total.content;
                
                this.flag2 = true;
                store.dispatch(actions.setReplies(total.replies));
                store.dispatch(actions.finishFetch());
                
            });
    }

    componentDidMount() {
        const id = store.getState().post.setIndex.index[this.props.match.params.id - 1] ? store.getState().post.setIndex.index[this.props.match.params.id - 1] : null;
        if(id == null || this.props.match.params.num != store.getState().setPageCurrent.pageCurrent) {
            if(!store.getState().fetchState.isFetching&&!this.flag1){
                this.setData()(Number.parseInt(this.props.match.params.num), filter(store.getState().setTabs.tabs));
            }else {
                this.flag1 = false;
            }
        }else {
            if(!store.getState().fetchState.isFetching&&!this.flag2){
                this.setReplies()(id);
            }else {
                this.flag2 = false;
            }
        }
        
    }

    componentDidUpdate() {
        const id = store.getState().post.setIndex.index[this.props.match.params.id - 1] ? store.getState().post.setIndex.index[this.props.match.params.id -1] : null;
        if(id == null || this.props.match.params.num != store.getState().setPageCurrent.pageCurrent) {
            if(!store.getState().fetchState.isFetching&&!this.flag1){
                this.setData()(Number.parseInt(this.props.match.params.num), filter(store.getState().setTabs.tabs));
            }else {
                this.flag1 = false;
                this.flag2 = false;
            }
        }else {
            if(!store.getState().fetchState.isFetching&&!this.flag2){
                this.setReplies()(id);
            }else {
                this.flag2 = false;
                this.flag1 = false;
            }
        }
        
    }

    render() {

        if(this.props.match.params.num < 1 || !Number.isInteger(Number.parseInt(this.props.match.params.num))
        ||this.props.match.params.id < 1 || !Number.isInteger(Number.parseInt(this.props.match.params.id))) {
            return (<div>404</div>);
        }
        
        if (store.getState().fetchState.isFetching || this.props.match.params.num != store.getState().setPageCurrent.pageCurrent) {
            return (<div>数据加载中...</div>);
        }

        const content = this.content;
        const pageNum = this.props.match.params.num;
        const position = this.props.match.params.id;
        const comments = store.getState().post.setReplies.replies;
        return (
            <div>
                <Article content = { content } pageNum = { pageNum } position = { position }/>
                <br/>
                <Reply comments = { comments }/>
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return {
        isFetching: state.fetchState.isFetching
    };
};

const detail = connect(mapStateToProps)(Detail);

export { detail as Detail } ;