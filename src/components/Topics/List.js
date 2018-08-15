import React from 'react';
import { Link } from 'react-router-dom';
//引入store
import { store } from '../../index';

export class List extends React.Component {
    constructor(props) {
        super(props);
    }

    setList(props) {
        let list = [];
        let { topicsData } = props;

        for (let i in topicsData) {

           
            list.push(
                (
                    <Link to={`${props.urlPrefix}/${store.getState().setPageCurrent.pageCurrent}/${ Number.parseInt(i) + 1 }`} className="list-group-item" key={topicsData[i].id}>
                        <h3 className="list-group-item-heading" style={{ color: 'blue' }}>
                            {topicsData[i].title}
                        </h3>
                        <p className="list-group-item-text">
                            {topicsData[i].content}
                        </p>
                    </Link>
                )
            );
        }

        return list;
    }

    render() {
        const props = this.props;
        let list = this.setList(props);
        
        return (
            <ul className='list-group text' style={{'text-align':'start'}}>
                {list}
            </ul>
        );
    }
}