import React from 'react'
import { Link } from 'react-router-dom';

export class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    setButton(pageNum, position) {
        let buttons = [];

        if(position === 1) {
            if(pageNum === 1) {
                buttons.push((
                    <button type="button" className="btn btn-info btn-lg" disabled="disabled">
                        <a>上一篇</a>
                    </button>
                ));
            }else {
                buttons.push((
                    <Link to = {`/detail/${pageNum - 1}/${ 10 }`}>
                        <button type="button" className="btn btn-info btn-lg">
                            上一篇
                        </button>
                    </Link>
                ));
            }
           
        }else {
            buttons.push((
                <Link to = {`/detail/${pageNum}/${position - 1}`}>
                    <button type="button" className="btn btn-info btn-lg">
                        上一篇
                    </button>
                </Link>
            ));
        }

        if(position === 10) {
            buttons.push((
                <Link to = {`/detail/${pageNum + 1}/${ 1 }`}>
                    <button type="button" className="btn btn-info btn-lg">
                        下一篇
                    </button>
                </Link>
            ));
        }else {
            buttons.push((
                <Link to = {`/detail/${pageNum}/${position + 1}`}>
                    <button type="button" className="btn btn-info btn-lg">
                        下一篇
                    </button>
                </Link>
            ));
        }

        return buttons;
    }
    
   
    render() {
        const pageNum = Number.parseInt(this.props.pageNum);
        const position = Number.parseInt(this.props.position);
        const content = this.props.content;

        const buttons = this.setButton(pageNum,position);
        return (
            <div>
                <div style={{'text-align':'start'}}>
                    <Link to = {`/list/${pageNum}`}>
                        <button type="button" className="btn btn-info btn-lg">
                            返回
                        </button>
                    </Link>
                </div>
                <br/>
                <div dangerouslySetInnerHTML={{ __html: `${content}` }} style={{'text-align':'start'}}>
                </div>
                <br/>
                <div>
                    { buttons }
                </div>
            </div>
        );
    }
}