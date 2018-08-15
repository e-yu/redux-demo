import { connect } from 'react-redux';
import { actions } from '../action';
import { Pagination } from '../Topics/Pagination';

const mapStateToProps = (state) => {
    return {
        pageCurrent: state.setPageCurrent.pageCurrent,
        urlPrefix:'/list'
    }
};


export const ContainPagination = connect(
    mapStateToProps
)(Pagination);

