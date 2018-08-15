import { connect } from 'react-redux';

import { List } from '../Topics/List';

function filter(list) {
    if(list) {
        return list.map(function(item) {
            //将文本转为html
            let div = document.createElement('div');
            div.innerHTML = item.content;

            //读取文本前一百个字符
            let content = div.innerText.slice(0,100) + '...';

            item.content = content;

            return item;

        });
    }
}

const mapStateToProps = (state) => {
    return {
        topicsData: filter(state.post.setList.list),
        urlPrefix: '/detail'
    }
};

export const ContainList = connect(
    mapStateToProps
)(List);

