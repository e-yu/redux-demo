import { connect } from 'react-redux';
import { actions } from '../action';
import { ListFilter } from '../Topics/ListFilter';

const mapStateToProps = (state) => {
    return {
      tabs: state.setTabs.tabs
    }
};

const mapDispatchToProps = {
    handleClick: actions.setTabs
};

export const ContainListFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListFilter);

