import React from 'react';
import { Link } from 'react-router-dom';

export class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    setPagination(props) {
        let pagination = [];

        if (props.pageCurrent == 1) {
            pagination.push(
                (
                    <li className='disabled' key={0}><a>&laquo;</a></li>
                )
            );
        }else {
            pagination.push(
                (
                    <li key={0}>
                        <Link to={`${props.urlPrefix}/${props.pageCurrent - 1}`}>
                            &laquo;
                        </Link>
                    </li>
                )
            );
        }

        if(props.pageCurrent < 5) {
            for (let i = 1; i <= 10; i++) {
                if (i == props.pageCurrent) {
                    pagination.push(
                        (
                            <li className='active' key={ i }>
                                <Link to={`${props.urlPrefix}/${ i }`}>
                                    { i }
                                </Link>
                            </li>
                        )
                    );
                }else {
                    pagination.push(
                        (
                            <li key={ i }>
                                <Link to={`${props.urlPrefix}/${ i }`}>
                                    { i }
                                </Link>
                            </li>
                        )
                    );
                }

            }

            pagination.push(
                (
                    <li key={ 11 }>
                        <Link to={`${props.urlPrefix}/${ props.pageCurrent + 1 }`}>
                            &raquo;
                        </Link>
                    </li>
                )
            );
        }else {
            for (let i = props.pageCurrent - 4; i <= props.pageCurrent + 5; i++) {
                if (i == props.pageCurrent) {
                    pagination.push(
                        (
                            <li className='active' key={ i }>
                                <Link to={`${props.urlPrefix}/${ i }`}>
                                    { i }
                                </Link>
                            </li>
                        )
                    );
                }else {
                    pagination.push(
                        (
                            <li key={ i }>
                                <Link to={`${props.urlPrefix}/${ i }`}>
                                    { i }
                                </Link>
                            </li>
                        )
                    );
                }

            }

            pagination.push(
                (
                    <li key={props.pageCurrent + 6}>
                        <Link to={`${props.urlPrefix}/${props.pageCurrent + 1}`}>
                            &raquo;
                        </Link>
                    </li>
                )
            );
        }

        
            
        

        return pagination;
    }

    render() {
        
        const props = this.props;
        
        const pagination = this.setPagination(props);
        

        return (
            <ul className='pagination'>
                {pagination}
            </ul>
        );
    }
}

