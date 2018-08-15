import React from 'react';


export class Reply extends React.Component{

    setList(comments) {
        let list = [];

        for(let item of comments) {
            list.push(
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 class="panel-title">{item.author.loginname}</h3>
                    </div>
                    <div className="panel-body" dangerouslySetInnerHTML={{ __html: `${item.content}` }}></div>
                </div>
            );
        }
        return list;
    }

    render() {
        const list = this.setList(this.props.comments);

        return (
            <div style={{'text-align':'start'}}>
                {list}
            </div>
        );
    }
}